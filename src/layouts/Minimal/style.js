import { makeStyles, useTheme } from '@material-ui/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    backgroundColor: theme.palette.black_white,
    color: theme.palette.color,
    fontFamily: 'roboto',
    minHeight: '100vh',
  },
  content: {
    width: '100%',
  },
	main: {
		marginTop: '70px'
	}
}));

export default useStyles;
