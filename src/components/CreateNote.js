import React, { useState } from 'react';
import { Typography, Grid, TextField, Paper, Button, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import NavBar from './NavBar';
import useStyles from '../Styles/CreateNoteStyles';

const Validation = Yup.object().shape({
    name: Yup
        .string()
        .required('Name is required'),
    notes: Yup
        .string()
        .max(200)
        .required('Note is required')
})

const CreateNote = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [success, setSuccess] = useState(false);
    const [url, setUrl] = useState(null);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const Alert = (props) => {
        return <MuiAlert elevation={6} variant='filled' {...props} />;
    }

    return (
        <React.Fragment>
            <NavBar />
            <div style={{ marginTop: '64px' }}>
                <Grid container direction='row' justify='center' alignItems='center' className={classes.root}>
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
                                onSubmit={async (values) => {
                                    try {
                                        const response = await axios.post('https://notify-backend-swpril.herokuapp.com/note/new', values);
                                        setSuccess(true);
                                        setUrl(response.data);
                                        setOpen(true);
                                    } catch (e) {
                                        setSuccess(false);
                                        setUrl(null);
                                        setOpen(true);
                                    }
                                }}
                            >
                                {({ values,
                                    errors,
                                    touched,
                                    handleChange,
                                    handleSubmit,
                                }) =>
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
                                                    errors.name && touched.name
                                                        ? errors.name : null
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
                                                    errors.notes && touched.notes
                                                        ? errors.notes : null
                                                }
                                            />
                                        </Grid>
                                        <Grid item className={classes.buttonContainer}>
                                            <Button
                                                type='submit'
                                                variant='contained'
                                                className={classes.button}
                                            >Submit</Button>
                                        </Grid>
                                    </Form>
                                }
                            </Formik>
                        </Paper>
                    </Grid>
                </Grid>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    {success ? (<Alert onClose={handleClose} severity='success'>
                        Your Unique URL is https://notify-backend-swpril.herokuapp.com/note/{url}
                    </Alert>):(<Alert severity='error' onClose={handleClose}>Some Error Occured!</Alert>)}

                </Snackbar>
            </div>
        </React.Fragment>
    );
}

export default CreateNote;