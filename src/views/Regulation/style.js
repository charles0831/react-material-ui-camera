import { faFileExcel } from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
		color: theme.palette.text.primary,
    padding: theme.spacing(3),
  },
  headerContainer: {
    marginBottom: theme.spacing(15),
		width: '100%'
  },
  regulation: {
		marginBottom: theme.spacing(3),		
		fontSize: '1.2em',
	},
	regulationTitle: {
		marginBottom: theme.spacing(5),		
		fontSize: '1.4em'
	},
	mainContainer: {
		display: 'flex',
		justifyContent: 'center'
	},
  buttonContainer: {
    marginTop: theme.spacing(3),
		textAlign: 'center',
  },  
  btnBack: {
    marginTop: theme.spacing(2),
    '&:hover': {
      textDecoration: 'none'
    },
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    color: theme.palette.topbar_background,
    fontSize: '1.0625em',
    fontFamily: 'roboto',
    fontWeight: '400',
    lineHeight: '1.75',
  },
	footer: {
		fontSize: '0.875rem',
		lineHeight: '25px',
		marginTop: '50%',
	},
  progressContainer: {
    position: 'absolute',
    top: '50%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  progress: {
    color: theme.palette.pink
  }
}));

export default useStyles;
