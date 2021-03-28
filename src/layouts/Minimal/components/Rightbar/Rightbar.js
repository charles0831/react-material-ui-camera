import React, { useState, useEffect } from "react";
import { useTheme } from '@material-ui/styles';
import Slider from "react-slick";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import img1 from "assets/img/slide1.png";
import img2 from "assets/img/slide2.png";
import useStyles from './style';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}			
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}

const Rightbar = props => {

	const theme = useTheme();
	const classes = useStyles(theme);
	const [ autoPlay, setAutoPlay ] = useState(false);
	const [ slider, setSlider ] = useState();
	
	const settings = {
		dots: true,
		infinite: true,
		speed: 1000,
		autoplaySpeed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		fade: true,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />
	};

	const play = () => {
    slider.slickPlay();
		setAutoPlay(!autoPlay);
  }

  const pause = () => {
    slider.slickPause();
		setAutoPlay(!autoPlay);
  }
	
	return (
		<div className={classes.container}>
			<Slider ref={slider => (setSlider(slider))} {...settings}>
				<div>
					<img src={img1} />
				</div>
				<div>
					<img src="http://placekitten.com/g/400/200" />
				</div>
				<div>
					<img src={img2} />
				</div>
				<div>
					<img src="http://placekitten.com/g/400/200" />
				</div>				
			</Slider>
			{
				!autoPlay?
				<PlayArrowIcon className={classes.btnPlay} onClick={play}/>
				:
				<PauseIcon className={classes.btnPlay} onClick={pause}/>
			}
		</div>
	);
}
export default Rightbar;
