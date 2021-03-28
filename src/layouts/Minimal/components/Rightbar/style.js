import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
	container: {
		// padding: '40px',
		background: 'green',
		'& .slick-slider .slick-track': {
			height: 'calc(100vh - 80px)',
		},
		'& .slick-dots': {
			textAlign: 'right',
			bottom: '22px',
			paddingRight: '20px',
		},
		'& .slick-prev': {
			top: '96%',
			bottom: '-20px',
			zIndex: 1,
			left: '46%',
		},
		'& .slick-next': {
			top: '96%',
			zIndex: 1,
			left: '54%',
		},
		'& .slick-dots li button:before': {
			fontSize: '14px',
			color: 'white',
			opacity: 1,
			// opacity: '0.25',
			// color: 'white',
		},
		'& .slick-dots li button:hover::before': {
			// fontSize: '14px',
			color: '#47AAEE',
			opacity: 1,
			// opacity: '0.25',
			// color: 'white',
		},
		'& .slick-dots li.slick-active button:before': {
			opacity: 1,
			color: '#47AAEE',
		},
		slickSlide: {
			'& .img': {
				margin: 'auto',
			},
		},
	},
	btnPlay: {
		right: '33.3%',
    position: 'absolute',
    marginTop: '-48px',
    left: '66.6%',
		color: '#47AAEE',
		backgroundColor: 'white',
		borderRadius: '15px'
	}
}));

export default useStyles;
