import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({ children }) => {
	const sliderSettings = {
		dots: true,
		speed: 500,
		arrows: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 7000,
		dotsClass: "slider-dots",
		appendDots: dots => <ul>{dots}</ul>,
	};

	return <Slider {...sliderSettings}>
		{children}
	</Slider>
}

export default ImageSlider;
