import React from "react";

const HyperLink = ({ children = "", link = "", label = "", target = "_blank" }) => {
	return <a className="stylized-link" href={link} rel={"noreferrer"} target={target}>
		{children || label}
	</a>
}

export default HyperLink;
