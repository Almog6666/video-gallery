import * as env from 'env-var';

const config = {
  service: {
    port: env.get('PORT').asPortNumber() || 8080,
  },
  minio: {
    config: {
      endPoint: env.get('MINIO_ENDPOINT').asString() || 'localhost',
      port: env.get('MINIO_PORT').asPortNumber() || 9000,
      useSSL: env.get('MINIO_USESSL').asBool() || false,
      accessKey:
        env.get('MINIO_ACCESSKEY').asString() || 'Q3AM3UQ867SPQQA43P2F',
      secretKey: env.get('MINIO_SECRETKEY').asString() || 'AD7SxBzBCWBvx2E',
    },
    bucketName: env.get('MINIO_BUCKETNAME').asString() || 'videogallery',
  },
  uploadFieldName: env.get('UPLOAD_FORMFIELD_NAME').asString() || 'vid'
};

export default config;
