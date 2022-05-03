import React from "react";

const Button = ({
	label = null,
	onClick = null,
	type = 'button',
	className = '',
	toggle = null,
	classButtonOn = null,
	classButtonOff = null,
	disabled = false,
	hyperlink = null
}) => {
	let toggleButtonOn = classButtonOn || `bg-blue-700 hover:bg-blue-800 focus:ring-blue-300`;
	let toggleButtonOff = classButtonOff || `bg-zinc-900 hover:bg-zinc-900 focus:ring-zinc-300`;

	let dynamicClasses = `${className} ${disabled ? 'cursor-not-allowed' : ''} ${toggle ? toggleButtonOn : toggleButtonOff}`;

	let buttonElement = <button
		type={type}
		onClick={disabled ? null : onClick}
		className={`${dynamicClasses} text-white font-medium text-center text-sm focus:ring-4 rounded px-5 py-2 mr-2`}
	>
		{label}
	</button>

	let hyperlinkElement = <a href={hyperlink}>{ buttonElement }</a>

	return hyperlink ? hyperlinkElement : buttonElement;
}

export default Button;
