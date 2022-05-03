import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Icon({ icon, size = '1x', className = '' }) {
	return <FontAwesomeIcon
		icon={icon}
		// size={size}
		className={`${className}`}
	/>;
}
