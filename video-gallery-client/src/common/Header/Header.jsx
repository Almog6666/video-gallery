import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import useStyles from './Header.styles';

const Header = () => {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h5' sx={{ flexGrow: 1 }}>
            <Link className={classes.link} to='/'>Video Gallery</Link>
          </Typography>
          <Link className={classes.link} to='/upload'><Button color='inherit'>Upload</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
