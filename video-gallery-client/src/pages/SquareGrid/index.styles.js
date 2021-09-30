import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  gridBox: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '2rem',
    margin: '2rem 10rem 0 10rem',
  },
}));

export default useStyles;
