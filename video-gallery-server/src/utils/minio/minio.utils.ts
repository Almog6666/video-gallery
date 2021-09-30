import minioClient from './minio.client';
import config from './../../config/index';
import * as fs from 'fs';

export const uploadLocalFileAndDelete = async (file) => {
  // Upload video
  await minioClient.fPutObject(
    config.minio.bucketName,
    file.originalname,
    file.path,
    ['application/octet-stream']
  );    

  // Upload video
  await minioClient.fPutObject(
    config.minio.bucketName,
    `${file.originalname}_thumbnail.jpg`,
    file.thumbnailPath,
    ['application/octet-stream']
  );

  // Delete file
  fs.rmSync(file.path);
  fs.rmSync(file.thumbnailPath);
};
