import useStyles from './index.styles';
import config from './../../config';
import { useParams } from 'react-router';

const PreviewPage = () => {
  const classes = useStyles();
  const { thumbnailfilename } = useParams();
  const videoFileSrc = `${config.apiUri}/file/thumb/${thumbnailfilename}`;
  return (
    <div className={classes.videoContainer}>
      <video className={classes.video} controls autoPlay>
        <source src={videoFileSrc} type='video/mp4' />
      </video>
    </div>
  );
};

export default PreviewPage;
