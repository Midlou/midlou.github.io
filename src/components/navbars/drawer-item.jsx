import React from "react";

export default function DrawerItem({ children, isOpen = false, link = "/", isCurrent = false }) {
    return isCurrent

        ? <a className="bg-gray-800 border-blue-500 flex items-center p-2 text-lg font-normal text-white border-l-4 default-focus-light"
            href={link} tabIndex={isOpen ? 0 : -1}>
            {children}
        </a>

        : <a className="hover:bg-gray-800 hover:border-blue-500 border-zinc-600 flex items-center p-2 text-lg font-normal text-white border-l-4 default-focus-light"
            href={link} tabIndex={isOpen ? 0 : -1}>
            {children}
        </a>;
}
