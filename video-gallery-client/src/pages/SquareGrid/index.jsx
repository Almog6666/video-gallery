import ThumbnailSquare from '../ThumbnailSquare';
import useStyles from './index.styles';

const SquareGrid = ({ list }) => {
  const classes = useStyles();
  return (
    <div className={classes.gridBox}>
      {list.map((item) => (
        <ThumbnailSquare thumbnailFileName={item}></ThumbnailSquare>
      ))}
    </div>
  );
};

export default SquareGrid;
