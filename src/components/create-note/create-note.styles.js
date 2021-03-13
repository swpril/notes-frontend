import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh'
  },
  paperGrid: {
    height: 'auto',
    display: 'flex',
    marginBottom: '12vh',
    justifyContent: 'center'
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
  }
}));

export default useStyles;
