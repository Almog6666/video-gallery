import Server from './express/server';
import config from './config';
import { initializeMinio } from './utils/minio/minio.client';

const main = async () => {

    initializeMinio(config.minio.bucketName)
    
    const server = new Server(config.service.port);

    await server.start();

    console.log(`Server started on port: ${config.service.port}`);
};

main().catch((err) => console.error(err));
