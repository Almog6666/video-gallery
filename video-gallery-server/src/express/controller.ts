import * as fs from 'fs';
import * as express from 'express';
import minioClient from '../utils/minio/minio.client';
import config from './../config/index';
import { uploadLocalFileAndDelete } from './../utils/minio/minio.utils';
import { compressMulitpleVids } from './../utils/ffmpeg.utils';
import AppManager from './manager';

export default class AppController {
  static async uploadMultipleVids(
    req: express.Request,
    res: express.Response
  ): Promise<any> {
    // Proccess all file paths and names
    const files: Express.Multer.File[] = Array.isArray(req.files)
      ? req.files
      : req.files[config.uploadFieldName];
    const fileNames: string[] = files.map((file) => file.originalname);

    // Compress all videos
    const compressedVidsPromises = await compressMulitpleVids(files);
    const compressedVidsList = await Promise.all(compressedVidsPromises);

    // Upload all compressed videos to S3/Minio, then delete them from temporary local dir
    compressedVidsList.map(
      async (file) => await uploadLocalFileAndDelete(file)
    );

    res.json(fileNames);
  }

  static async listAllThumbnails(req: express.Request, res: express.Response) {
    const stream = minioClient.listObjects(config.minio.bucketName);
    let objects: any[] = [];

    stream.on('data', (obj) => {
      objects.push(obj);
    });
    stream.on('close', () => {
      return res.json(objects.filter((obj) => obj.name.includes('.jpg')));
    });
    stream.on('error', (err: Error) => {
      throw err;
    });
  }

  static async getFileByName(req: express.Request, res: express.Response) {
    const filepath = await AppManager.getFileByName(req.params.filename);
    res.sendFile(filepath, () => {
      fs.rmSync(filepath);
    });
  }

  static async getFileByThumbnailName(
    req: express.Request,
    res: express.Response
  ) {
    const thumbnailName = req.params.name;
    const fileName = thumbnailName.split('_thumbnail.jpg')[0];
    
    const filepath = await AppManager.getFileByName(fileName);
    res.sendFile(filepath, () => {
      fs.rmSync(filepath);
    });
  }
}
