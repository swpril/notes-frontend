import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  nameGrid: {
    padding: theme.spacing(3),
    textAlign: 'center'
  },
  name: {
    fontSize: theme.spacing(4),
    fontFamily: 'Roboto Mono',
    fontWeight: 'bold',
    fontStyle: 'normal',
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.spacing(2.5)
    }
  },
  noteGrid: {
    padding: theme.spacing(3),
    textAlign: 'center'
  },
  notes: {
    fontSize: theme.spacing(3),
    fontFamily: 'Roboto Mono',
    fontWeight: '550',
    fontStyle: 'normal',
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.spacing(2)
    }
  },
  mainNote: {
    fontSize: theme.spacing(3),
    fontFamily: 'Roboto Mono',
    fontWeight: '400',
    fontStyle: 'normal',
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.spacing(2)
    }
  }
}));

export default useStyles;
