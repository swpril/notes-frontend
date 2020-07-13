import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';
import useStyles from '../Styles/GetNoteStyles';
import Spinner from '../Spinner/Spinner';

const GetNote = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    useEffect(() => {
        const getNote = async () => {
            const response = await axios.get(`http://localhost:8000/note/${id}`);
            setData(response.data);
        };
        getNote();
    }, [id]);

    const classes = useStyles();
    if (!data) {
        return (
            <Spinner />
        )
    }
    return (
        <div className={classes.root}>
            <NavBar />
            <div style={{ marginTop: '64px' }}>
                <Grid container direction='row' justify='center' alignItems='center' >
                    <Grid item xs={12} className={classes.nameGrid}>
                        <Typography className={classes.name}>Hey {data.name}</Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.noteGrid}>
                        <Typography className={classes.notes}>Your extremely important information is here:</Typography>
                        <Typography className={classes.notes}>{data.notes}</Typography>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default GetNote;