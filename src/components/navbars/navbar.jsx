import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import DonateButton from "../buttons/donateButton";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Icon from "@components/icons/icon";

export default function NavBar({ title = '', setDrawerIsOpen = () => { } }) {
	return <nav className="text-white text-center p-3 bg-gray-800 drop-shadow-lg">

		<div className="flex flex-wrap justify-between items-center mx-auto max-w-7xl">
			<div className="flex justify-between items-center">
				<button type="button" onClick={() => setDrawerIsOpen(true)}
					className="inline-flex items-center text-lg text-gray-400 hover:text-white rounded-lg hover:bg-gray-600 default-focus-light">

					<Icon className="block h-8 w-8" icon={faBars} />

				</button>

				<Link to={"/"} className="ml-5 hidden sm:block">
					<StaticImage className="block h-8 w-8"
						placeholder="tracedSVG"
						alt="Website logo"
						loading="eager"
						src="../../images/mid-icon-light-64x64-a1.svg"
					/>
				</Link>

				<h3 className="ml-5 mb-0 font-semibold hidden sm:block">
					{title}
				</h3>
			</div>
			<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
				<button type="button" onClick={() => { }}
					className="inline-flex items-center text-lg text-gray-400 hover:text-white rounded-lg hover:bg-gray-600 default-focus-light">

					<DonateButton />
				</button>

			</div>
		</div>

	</nav>
}
