import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },

    appBar: {
        backgroundColor: '#D7022B',
        padding: 0
    },
    toolbar: {
        padding: 0
    },

    navBarGrid: {
        padding: theme.spacing(.5)
    },

    titleGrid: {
        textAlign: 'center',
        padding: theme.spacing(1),
    },
    title: {
        fontFamily: 'Roboto Mono',
        fontWeight: 'bold',
        color: '#E8EDF0',
        letterSpacing: '.3em',
        fontSize: theme.spacing(3),
        [theme.breakpoints.down('xs')]: {
            fontSize: theme.spacing(2),
            letterSpacing: '.15em'
        }
    },
}));



export default useStyles;