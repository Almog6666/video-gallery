import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import useStyles from './Loader.styles';

const Loader = () => {
  const classes = useStyles();
  return (
    <div className={classes.loaderContainer}>
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    </div>
  );
};

export default Loader;
