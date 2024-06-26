import React, { useState } from "react";
// import { ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

// components
import NavBar from "../navbars/header";
import Footer from "../navbars/footer";
import Drawer from "../navbars/drawer";
import DrawerItem from "../navbars/drawer-item.jsx";

// constants
import { MENU_ITEMS } from "../../constants/menu-items.js";

const MainLayout = ({ title, children }) => {
	const [isDrawerOpen, setDrawerIsOpen] = useState(false);

	return <>
		{/* <ToastContainer position='bottom-left' autoClose={5000} theme="dark" /> */}

		<div className="flex flex-col min-h-screen justify-between deadpixel">
			<header className="sticky top-0 z-40">
				<NavBar title={title} setDrawerIsOpen={setDrawerIsOpen} />
			</header>
			<main className="flex-grow h-full">
				{children}
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

	</>
}

export default MainLayout;
