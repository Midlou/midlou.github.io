import React, { useState } from "react";
import NavBar from "../navbars/navbar";
import { Helmet } from 'react-helmet';
import Footer from '../navbars/footer';
import favicon from '../../images/mid-icon-light-64x64-a1.png';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Drawer from "@components/navbars/drawer";
import DrawerItem from "@components/navbars/drawerItem";
import { MENU_ITEMS } from "@constants/menu";

const MainLayout = ({ title, Component }) => {
    const [isDrawerOpen, setDrawerIsOpen] = useState(false);

	return <>
		<ToastContainer position='bottom-left' autoClose={5000} theme="dark" />

		<Helmet>
			<title>{title + " - Midlou"}</title>
			<link rel="icon" href={favicon} />
			{/* <meta name="description" content="Helmet application" /> */}
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
                            { page.label }
                        </DrawerItem>
                    })
                }
            </Drawer>
		</div>

	</>
}

export default MainLayout;
