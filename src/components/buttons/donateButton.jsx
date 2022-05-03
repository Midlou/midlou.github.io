import React from "react";
import Icon from "../icons/icon";
import { faMugHot } from '@fortawesome/free-solid-svg-icons'

const DonateButton = ({ large = false }) => {
	let btnClasses = `${large ? "font-bold text-2xl px-10 py-4" : "font-medium text-sm px-4 py-3"}`;

	return <a href="https://ko-fi.com/H2H2AH0S2" target={"_blank"} rel={"noreferrer"}
		className={`${btnClasses} animate-wiggle drop-shadow-md bg-blue-700 hover:bg-blue-800 focus:ring-blue-500 text-white text-center focus:ring-4 rounded`}>
		<span className="animate-pulse">
			{'Support Me on Ko-Fi'} <Icon size={large ? "6x" : "1x"} className="kofi-icon ml-1" icon={faMugHot} />
		</span>
	</a>
}

export default DonateButton;
