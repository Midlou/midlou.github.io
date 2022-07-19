import React from "react";

const ResponsiveText = ({ children, className = '' }) => {
	return <p className={`${className} text-white mb-6 mt-3 text-base sm:text-lg md:mt-5 md:text-xl`}>
		{children}
	</p>
}

export default ResponsiveText;
