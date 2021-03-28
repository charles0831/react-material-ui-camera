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
  register: {
		marginBottom: theme.spacing(3),		
		fontSize: '1.2em',
	},
	registerTitle: {
		marginBottom: theme.spacing(5),		
		fontSize: '1.4em'
	},
	mainContainer: {
		display: 'flex',
		justifyContent: 'center'
	},
  buttonContainer: {
    marginTop: theme.spacing(4),
		textAlign: 'center',
  },
  input_box_label: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
    fontSize: '0.9375em',
  },
  input_box: {
    '& svg': {
			fill: theme.palette.text.secondary
		},
			color: theme.palette.text.primary,
    backgroundColor: theme.palette.black_white,
			border: `1px solid ${theme.palette.text.primary}`,
    padding: '10px 20px',
    width: '360px',
  },
  error_log: {
    color: 'red',
    fontFamily: 'roboto'
  },
  btnVerification: {
    '& .MuiButton-label': {
      textTransform: 'none',
      fontSize: '1.0625em',
    },
    '&:hover': {
      backgroundColor: theme.palette.topbar_background
    },
    padding: '4px',
    borderRadius: '0px',
    fontWeight: '300',
    backgroundColor: theme.palette.topbar_background,
    color: theme.palette.black_white,
    width: '60%',
		
  },
  btnLogin: {
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
	linkColor: {
		color: theme.palette.topbar_background,	
	},
	footer: {
		fontSize: '0.875rem',
		lineHeight: '25px',
		position: 'absolute',
    width: '31%',
    bottom: '25px',
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
