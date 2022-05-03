import React from "react";

const MiceblocksDownloadBtn = ({
	label = null,
	onClick = null,
	type = 'button',
	className = '',
	hyperlink = null,
	target = "_blank"
}) => {
	let buttonElement = <button
		type={type}
		onClick={onClick}
		className={`${className} glow-on-hover text-white text-center text-2xl focus:ring-4 focus:ring-green-400 rounded py-3 px-5 drop-shadow-lg`}
	>
		<b>{label}</b>
	</button>

	let hyperlinkElement = <a href={hyperlink} target={target} rel="noreferrer">{buttonElement}</a>

	return hyperlink ? hyperlinkElement : buttonElement;
}

export default MiceblocksDownloadBtn;
