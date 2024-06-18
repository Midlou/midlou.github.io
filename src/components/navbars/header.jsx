import React from "react";
import { Bars3BottomLeftIcon } from '@heroicons/react/24/solid'

// icons
import MidIconLight from "../../assets/icons/mid-icon-light-1.svg";

export default function NavBar({ title = '', setDrawerIsOpen = () => { } }) {
	return <nav className="text-white text-center p-3 bg-gray-700 drop-shadow-lg">

		<div className="flex flex-wrap justify-between items-center mx-auto">
			<div className="flex justify-between items-center">
				<button type="button" onClick={() => setDrawerIsOpen(true)}
					className="inline-flex items-center text-4xl text-gray-400 hover:text-white rounded-lg hover:bg-gray-600 default-focus-light">
					<Bars3BottomLeftIcon className="h-10 w-10"/>
				</button>

				<a href="/" className="ml-5 hidden sm:block">
					<img src={MidIconLight.src} className="block h-8 w-8" alt="Website logo" />
				</a>

				<h3 className="ml-5 mb-0 font-semibold hidden sm:block">
					{title}
				</h3>
			</div>
		</div>

	</nav>
}
