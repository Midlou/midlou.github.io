import React from "react";

const ResponsiveText = ({ children, className = '' }) => {
	return <p className={`${className} text-white text-base sm:text-lg md:text-xl`}>
		{children}
	</p>
}

export default ResponsiveText;
