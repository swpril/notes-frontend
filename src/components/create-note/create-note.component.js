import React, { useState } from 'react';

import {
  Typography,
  Grid,
  TextField,
  Paper,
  Button,
  Snackbar
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { BeatLoader } from 'react-spinners';

import axios from 'axios';

import { NavBar } from '../nav-bar/nav-bar.component';

import useStyles from './create-note.styles';

const Validation = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  notes: Yup.string()
    .max(200)
    .required('Note is required')
});

const CreateNote = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [url, setUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const Alert = props => {
    return <MuiAlert elevation={6} variant='filled' {...props} />;
  };

  return (
    <React.Fragment>
      <NavBar />
      <div>
        <Grid
          container
          direction='row'
          justify='center'
          alignItems='center'
          className={classes.root}
        >
          <Grid item xs={12} className={classes.paperGrid}>
            <Paper elevation={6} className={classes.paper}>
              <div className={classes.titleDiv}>
                <Typography className={classes.title}>Create Note</Typography>
              </div>
              <Formik
                initialValues={{
                  name: '',
                  notes: ''
                }}
                validationSchema={Validation}
                onSubmit={async values => {
                  setLoading(true);
                  try {
                    const response = await axios.post(
                      'http://localhost:8088/',
                      values
                    );
                    setSuccess(true);
                    setUrl(response.data);
                    setOpen(true);
                  } catch (e) {
                    setSuccess(false);
                    setUrl(null);
                    setOpen(true);
                  }
                  setLoading(false);
                }}
              >
                {({ values, errors, touched, handleChange, handleSubmit }) => (
                  <Form style={{ padding: '8px' }} onSubmit={handleSubmit}>
                    <Grid item className={classes.inputGrid}>
                      <TextField
                        className={classes.inputField}
                        error={errors.name && touched.name}
                        name='name'
                        variant='outlined'
                        onChange={handleChange}
                        id='name'
                        label='Name'
                        helperText={
                          errors.name && touched.name ? errors.name : null
                        }
                      />
                    </Grid>
                    <Grid item className={classes.inputGrid}>
                      <TextField
                        className={classes.inputField}
                        error={errors.notes && touched.notes}
                        name='notes'
                        variant='outlined'
                        multiline
                        rows='6'
                        onChange={handleChange}
                        id='notes'
                        label='Add Your Note'
                        helperText={
                          errors.notes && touched.notes ? errors.notes : null
                        }
                      />
                    </Grid>
                    <Grid item className={classes.buttonContainer}>
                      <Button
                        type='submit'
                        disabled={loading}
                        variant='contained'
                        className={classes.button}
                        style={{ top: '50%' }}
                      >
                        {loading ? (
                          <BeatLoader color={'#fff'} />
                        ) : (
                          <span>Submit</span>
                        )}
                      </Button>
                    </Grid>
                  </Form>
                )}
              </Formik>
            </Paper>
          </Grid>
        </Grid>
        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
          {success ? (
            <Alert onClose={handleClose} severity='success'>
              Your unique URL is http://localhost:3000/{url}
            </Alert>
          ) : (
            <Alert severity='error' onClose={handleClose}>
              Some Error occurred!
            </Alert>
          )}
        </Snackbar>
      </div>
    </React.Fragment>
  );
};

export { CreateNote };
