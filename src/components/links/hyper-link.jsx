import React from "react";

const HyperLink = ({ children = "", link = "", label = "", target = "_blank", className = "''" }) => {
	return <a className={`${className} stylized-link`} href={link} rel={"noreferrer"} target={target}>
		{children || label}
	</a>
}

export default HyperLink;
