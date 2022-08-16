import { Link } from "gatsby";
import React from "react";

export default function DrawerItem({ children, isOpen = false, link = "/", isCurrent = false }) {
	return <Link to={link} className={`
				${isCurrent ? "bg-zinc-800 border-blue-500" : "hover:bg-zinc-800 hover:border-blue-500 border-zinc-600"}
				flex items-center p-2 text-lg font-normal text-white border-l-4 default-focus-light
			`} tabIndex={isOpen ? 0 : -1}>
		{children}
	</Link>;
}
