import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Grid, Typography } from '@material-ui/core';

import axios from 'axios';

import { NavBar } from '../nav-bar/nav-bar.component';
import useStyles from './get-note.styles';

import Spinner from '../../Spinner/Spinner';

const GetNote = props => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getNote = async () => {
      try {
        const response = await axios.get(`http://localhost:8088/${id}`);
        setData(response.data);
      } catch (e) {
        setError('No Note found');
      }
    };
    getNote();
  }, [id]);

  const classes = useStyles();
  if (error) {
    return (
      <div>
        <NavBar />
        <div>
          <Typography className={classes.name}>{error}</Typography>
        </div>
      </div>
    );
  } else if (!data) {
    return <Spinner />;
  }
  return (
    <div>
      <NavBar />
      <div style={{ marginTop: '64px' }}>
        <Grid container direction='row' justify='center' alignItems='center'>
          <Grid item xs={12} className={classes.nameGrid}>
            <Typography className={classes.name}>Hey {data.name}</Typography>
          </Grid>
          <Grid item xs={12} className={classes.noteGrid}>
            <Typography className={classes.notes}>
              Your extremely important information is here:
            </Typography>
            <Typography className={classes.mainNote}>"{data.notes}"</Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export { GetNote };
