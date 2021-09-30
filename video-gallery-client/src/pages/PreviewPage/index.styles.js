import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  videoContainer: {
    display: 'grid',
    justifyContent: 'center',
    margin: '5%',
  },
  video: {
    width: '100%',
  },
}));

export default useStyles;
