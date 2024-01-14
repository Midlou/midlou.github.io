import React from "react";

const HyperLink = ({ children = "", link = "", label = "", target = "_blank", className = "''" }) => {
	return <a className={`${className} hover:underline text-blue-400 hover:text-blue-500`} href={link} rel={"noreferrer"} target={target}>
		{children || label}
	</a>
}

export default HyperLink;
