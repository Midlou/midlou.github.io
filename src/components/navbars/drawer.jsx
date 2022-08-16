import Icon from "@components/icons/icon";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function Drawer({ children, title = "", isOpen, setIsOpen = () => {} }) {
    return (
        <div className={
            " fixed overflow-hidden z-10 inset-0 transform ease-in-out text-white " +
            (isOpen
                ? " transition-opacity opacity-100 duration-200 -translate-x-0  "
                : " transition-all delay-200 opacity-0 -translate-x-full  ")
        }>
            <div className={
                " w-3/4 sm:w-1/3 md:w-1/4 lg:w-1/5 left-0 absolute bg-zinc-900 h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
                (isOpen ? " -translate-x-0 " : " -translate-x-full ")
            }>
                <div className="relative pb-10 flex flex-col default-scrollbar overflow-y-auto h-full">
                    <div className="p-4 flex justify-between items-center rounded-t border-b border-gray-600">
                        <h3 className="font-bold mb-0">
                            {title}
                        </h3>
                        <button type="button" onClick={() => { setIsOpen(false) }}
                            className="text-gray-400 rounded-lg text-sm inline-flex hover:bg-gray-600 hover:text-white p-1" tabIndex={isOpen ? 0 : -1}>
							<Icon className="block h-8 w-8" icon={faTimes} />

                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {children}
                </div>
            </div>
            <div className="w-screen h-full cursor-pointer" onClick={() => { setIsOpen(false) }}></div>
        </div>
    );
}
