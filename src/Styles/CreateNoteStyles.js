import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    paperGrid: {
        height: 'auto',
        display: 'flex',
        marginBottom: '12vh',
        justifyContent: 'center',
    },
    paper: {
        width: theme.spacing(40),
        textAlign: 'center',
        border: '1px solid black'
    },
    titleDiv: {
        textAlign: 'start',
        padding: theme.spacing(1),
        margin: theme.spacing(1)
    },
    title: {
        fontFamily: 'Roboto Mono',
        fontStyle: 'normal',
        fontWeight: 'bold'
    },
    inputGrid: {
        padding: theme.spacing(1)
    },
    inputField: {
        width: '100%'
    },
    buttonContainer: {
        padding: theme.spacing(1)
    },
    button: {
        '&.MuiButton-root': {
            backgroundColor: '#D7022B'
        },
        width: '100%',
        textTransform: 'none',
        color: '#E8EDF0'
    },
    fileGrid: {
        margin: theme.spacing(1),
        padding: theme.spacing(1),
    },
    outletImage: {
        fontFamily: 'Roboto Mono',
        fontWeight: '600',
    },
    uploadButton: {
        borderRadius: theme.spacing(2),
        fontSize: theme.spacing(1.5),
        textTransform: 'none',
        fontFamily: 'Roboto Mono',
        '&.MuiButton-root': {
            backgroundColor: '#D7022B'
        },
        color: '#E8EDF0',
        marginTop: theme.spacing(1)
    },

    errorMessage: {
        color: '#D7022B',
        fontFamily: 'Roboto Mono',
        fontSize: theme.spacing(1.5),
    },
    selectDiv: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    options: {
        fontFamily: 'Roboto Mono',
        fontSize: theme.spacing(2.5),
        [theme.breakpoints.down('xs')]: {
            fontSize: theme.spacing(2),
        }
    },

}));

export default useStyles;