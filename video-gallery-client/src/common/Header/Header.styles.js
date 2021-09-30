import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#3399ff',
    height: '10vh',
    display: 'grid',
    alignContent: 'center',
    justifyContent: 'center',
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: '2rem',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
}));

export default useStyles;
