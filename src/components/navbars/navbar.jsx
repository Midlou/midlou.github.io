import React from "react";
import { Disclosure } from '@headlessui/react'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Icon from "../icons/icon";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import DonateButton from "../buttons/donateButton";

export default function NavBar({ title = '', menuItems = [] }) {
	return <Disclosure as="nav" className="bg-gray-800">
		{({ open }) => (
			<>
				<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
					<div className="relative flex items-center justify-between h-16">
						<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
							{/* Mobile menu button*/}
							<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
								<span className="sr-only">Open main menu</span>
								{open ? (
									<Icon className="block h-6 w-6" icon={faTimes} />
								) : (
									<Icon className="block h-6 w-6" icon={faBars} />
								)}
							</Disclosure.Button>
						</div>
						<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
							<div className="flex-shrink-0 sm:flex items-center hidden">
								<Link to={"/"}>
									<StaticImage className="block h-8 w-8"
										placeholder="none"
										alt="Website logo"
										loading="eager"
										src="../../images/mid-icon-light-64x64-a1.svg"
									/>
								</Link>
							</div>
							<div className="hidden sm:block sm:ml-6">
								<div className="flex space-x-4">
									{menuItems.map((item) => (
										<Link key={item.label}
											to={item.link}
											className={`
												${item.label === title
													? 'bg-gray-900 text-white'
													: 'text-gray-300 hover:bg-gray-700 hover:text-white'
												} px-3 py-2 rounded-md text-sm font-medium
											`}
											aria-current={item.label === title ? 'page' : undefined}>
											{item.label}
										</Link>
									))}
								</div>
							</div>
						</div>
						<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
							<DonateButton />
						</div>
					</div>
				</div>

				<Disclosure.Panel className="sm:hidden">
					<div className="px-2 pt-2 pb-3 space-y-1">
						{menuItems.map((item) => (
							<Link to={item.link}>
								<Disclosure.Button key={item.label}
									aria-current={item.label === title ? 'page' : undefined}
									className={`${item.label === title ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} w-full text-left px-3 py-2 rounded-md text-lg font-medium`}>
									{item.label}
								</Disclosure.Button>
							</Link>
						))}
					</div>
				</Disclosure.Panel>
			</>
		)}
	</Disclosure>
}
