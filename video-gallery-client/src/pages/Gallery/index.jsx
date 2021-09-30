import ThumbnailGalleryService from './../../services/thumbnailGallery.service';
import { useEffect, useState } from 'react';
import SquareGrid from '../SquareGrid';

const Gallery = () => {
  const [thumbnailsList, setThumbnailsList] = useState();
  useEffect(() => {
    const setThumbnails = async () => setThumbnailsList(await ThumbnailGalleryService.getAllThumbnailsList());
    setThumbnails();
  }, []);
  return thumbnailsList ? <SquareGrid list={thumbnailsList}></SquareGrid> : '';
};

export default Gallery;
