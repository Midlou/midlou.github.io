import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Helmet, HelmetProvider } from "react-helmet-async";

// components
import NavBar from "../navbars/header";
import Footer from "../navbars/footer";
import Drawer from "../navbars/drawer";
import DrawerItem from "../navbars/drawer-item.jsx";

// icon
import favicon from '../../assets/icons/mid-icon-light-1.svg';

// constants
import { MENU_ITEMS } from "../../constants/menu-items.js";

const MainLayout = ({ title, Component }) => {
	const [isDrawerOpen, setDrawerIsOpen] = useState(false);

	return <HelmetProvider>
		<ToastContainer position='bottom-left' autoClose={5000} theme="dark" />

		<Helmet>
			<title>{`${title} - Midlou`}</title>
			<link rel="icon" href={favicon} />
		</Helmet>
		<div className="flex flex-col h-screen justify-between text-white deadpixel">
			<header>
				<NavBar title={title} setDrawerIsOpen={setDrawerIsOpen} />
			</header>
			<main className="flex-grow bg-gradient-to-r from-slate-600 to-slate-700">
				{Component}
			</main>
			<footer>
				<Footer />
			</footer>
			<Drawer title={title} isOpen={isDrawerOpen} setIsOpen={setDrawerIsOpen}>
				{
					MENU_ITEMS.map((page, index) => {
						return <DrawerItem key={page?.value || index} link={page.link} isCurrent={title === page.label} isOpen={isDrawerOpen}>
							{page.label}
						</DrawerItem>
					})
				}
			</Drawer>
		</div>

	</HelmetProvider>
}

export default MainLayout;
