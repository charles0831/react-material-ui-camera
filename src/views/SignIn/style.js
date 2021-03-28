import { faFileExcel } from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {    
		color: theme.palette.text.primary,
		padding: theme.spacing(3),
		
  },
  welcomeContainer: {    
		width: '100%'
  },
  welcome: {
		marginBottom: theme.spacing(3),		
		fontSize: '1.2em',
	},
	createLogin: {
		marginBottom: theme.spacing(5),		
		fontSize: '1.4em'
	},
	mainContainer: {
		display: 'flex',
		justifyContent: 'center'
	},
  rememberMe: {
    '& .MuiTypography-body1': {
      color: theme.palette.gray,
			fontSize: '1em',
    },
    '& .MuiCheckbox-colorSecondary.Mui-checked' : {
      color: theme.palette.topbar_background
    }
  },
  buttonContainer: {
    marginTop: theme.spacing(3),
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
  btnLogin: {
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
  btnForgot: {
    marginTop: theme.spacing(2),
    '&:hover': {
      textDecoration: 'none'
    },
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'right',
    width: '100%',    
    fontSize: '0.875em',
    fontFamily: 'roboto',
    fontWeight: '400',
    lineHeight: '1.75',
  },
	btnRegister: {
    marginTop: theme.spacing(2),
    '&:hover': {
      textDecoration: 'none'
    },
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    fontSize: '1.0625em',
    fontFamily: 'roboto',
    fontWeight: '400',
    lineHeight: '1.75',
		text: 'center'
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
  },
	socialContainer: {
		textAlign: 'center'
	},
	loginWithSocial: {
		textAlign: 'left',
		marginTop: theme.spacing(5),		
		marginBottom: theme.spacing(3),		
		fontSize: '1em'
	},
	footer: {
		fontSize: '0.875rem',
		lineHeight: '25px',
		marginTop: theme.spacing(8),
	},
	linkColor: {
		color: theme.palette.topbar_background,	
	},
	btnGoogleLogin: {
		width: '250px',
    border: '1.5px solid #ECECEC',
    cursor: 'pointer',
    margin: 'auto',
    alignItems: 'center',
    borderRadius: theme.spacing(0.5),
    marginBottom: theme.spacing(1.8),
		height: theme.spacing(4.5),
		backgroundColor: '#ECECEC',
		'&:hover': {
      boxShadow:
      '0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)',
    },
	},
	btnAppleLogin: {
		width: '250px',
    border: '1.5px solid #bfbbbb',
    cursor: 'pointer',
    margin: 'auto',
    alignItems: 'center',
    borderRadius: theme.spacing(0.5),
    marginBottom: theme.spacing(1.8),
		height: theme.spacing(4.5),
		'&:hover': {
			backgroundColor: '#ECECEC',
			boxShadow:
      '0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)',
    },
	},
	btnFacebookLogin : {
		backgroundColor: '#4267B2',
		width: '250px',
    border: '1.5px solid #ECECEC',
    cursor: 'pointer',
    margin: 'auto',
    alignItems: 'center',
    borderRadius: theme.spacing(0.5),
    marginBottom: theme.spacing(1.8),
		height: theme.spacing(4.5),
		color: 'white',
		'&:hover': {
			backgroundColor: '#819acc',
			boxShadow:
      '0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)',
    },
	}
}));

export default useStyles;
