import axios from 'axios';
import config from './../config';

class ThumbnailGalleryService {
  static async getAllThumbnailsList() {
    const { data } = await axios.get(`${config.apiUri}/thumbnails`);
    return data.map(thumbnail => thumbnail.name);
  }
}

export default ThumbnailGalleryService;
