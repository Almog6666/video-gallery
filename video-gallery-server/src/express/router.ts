import * as express from 'express';
import { BucketItem, BucketStream } from 'minio';
import * as multer from 'multer';
import minioClient from '../utils/minio/minio.client';
import config from './../config/index';
import AppController from './controller';

const appRouter = express.Router();

appRouter.post(
  '/upload',
  multer({ dest: './temp/', limits: { fileSize: 52428800 } }).array(
    config.uploadFieldName
  ),
  AppController.uploadMultipleVids
);

appRouter.get('/thumbnails', AppController.listAllThumbnails);

appRouter.get('/file/:filename', AppController.getFileByName);

appRouter.get('/file/thumb/:name', AppController.getFileByThumbnailName);

appRouter.use('/isAlive', (_req: express.Request, res: express.Response) => {
  res.status(200).send('alive');
});

export default appRouter;
