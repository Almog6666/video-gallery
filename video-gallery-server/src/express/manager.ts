import * as fs from 'fs';
import minioClient from '../utils/minio/minio.client';
import config from './../config/index';

export default class AppManager {
  static async getFileByName(filename: string) {
    const decodedFilename = decodeURI(filename);
    const filepath = __dirname + `/temp/downloads/${decodedFilename}`;
    await minioClient.fGetObject(config.minio.bucketName, decodedFilename, filepath);
    return filepath;
  }
}
