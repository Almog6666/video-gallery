import { Link } from 'react-router-dom';
import config from './../../config';

const ThumbnailSquare = ({ thumbnailFileName }) => {
  const thumbnailSrc = `${config.apiUri}/file/${thumbnailFileName}`;
  return (
    <div>
      <Link to={`/preview/${thumbnailFileName}`}>
        <img src={thumbnailSrc} alt='' width='100%' />
      </Link>
    </div>
  );
};

export default ThumbnailSquare;
