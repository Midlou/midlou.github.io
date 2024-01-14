import React from "react";

import { Link } from "react-router-dom";

export default function DrawerItem({ children, isOpen = false, link = "/", isCurrent = false }) {
    return isCurrent
	
        ? <Link className="bg-zinc-800 border-blue-500 flex items-center p-2 text-lg font-normal text-white border-l-4 default-focus-light"
            to={link} tabIndex={isOpen ? 0 : -1}>
            {children}
        </Link>

        : <Link className="hover:bg-zinc-800 hover:border-blue-500 border-zinc-600 flex items-center p-2 text-lg font-normal text-white border-l-4 default-focus-light"
            to={link} tabIndex={isOpen ? 0 : -1}>
            {children}
        </Link>;
}
