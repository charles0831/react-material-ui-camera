import { CallReceived } from '@material-ui/icons';
import { makeStyles, useTheme } from '@material-ui/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0),
    backgroundColor: theme.palette.black_white,
    color: theme.palette.color,
    fontFamily: 'roboto',
    minHeight: '100vh',
  },
  content: {
    width: '100%',
  },
	main: {
		paddingTop: '80px',
	},
	sidebar: {
		height: 'calc(100vh - 80px)',
		overflow: 'auto'
	}
}));

export default useStyles;
