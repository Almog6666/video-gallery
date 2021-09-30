import * as Minio from 'minio';
import config from '../../config';

const minioClient = new Minio.Client(config.minio.config);

export const initializeMinio = async (bucketName: string) => {
  const conn = await minioClient.bucketExists(bucketName);
  if (!conn) await minioClient.makeBucket(bucketName, '');
};

export default minioClient;
