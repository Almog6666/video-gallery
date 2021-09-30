import ffmpeg = require('ffmpeg');
import * as fs from 'fs';

export const compressMulitpleVids = async (
  files: Express.Multer.File[]
): Promise<any> => {
  return files.map(async (file: Express.Multer.File) => {
    try {
      const process = new ffmpeg(file.path);
      const video = await process;
      const compressedVidPath = `${file.path}.mp4`;
      await video.save(compressedVidPath);
      const thumbnailPath = await createVidThumbnail(video, file.path);
      fs.rmSync(file.path);
      return {
        originalname: file.originalname,
        path: compressedVidPath,
        thumbnailPath,
      };
    } catch (err) {
      throw new Error(`Files compress error. Error: ${err}`);
    }
  });
};

export const createVidThumbnail = async (
  video: any,
  path: string
): Promise<any> => {
  await video.fnExtractFrameToJPG('temp', { number: 1, start_time: 2 });
  return `${path}_1.jpg`;
};
