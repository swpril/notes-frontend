import React from 'react';
import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from '../Styles/NavBarStyles';

const NavBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.grow}>
            <AppBar position='fixed' className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Grid container direction='row' justify='center' alignItems='center' className={classes.navBarGrid}>
                        <Grid item xs={12} className={classes.titleGrid}>
                            <Typography className={classes.title}>
                                <Link to='/' style={{ textDecoration: 'none', color: '#E8EDF0' }}> Notify
                                </Link></Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
};


export default NavBar;