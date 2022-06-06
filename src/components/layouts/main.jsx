import React from "react";
import NavBar from "../navbars/navbar";
import { Helmet } from 'react-helmet';
import Footer from '../navbars/footer'
import favicon from '../../images/mid-icon-light-64x64-a1.png'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import InternalPages from "../../content/internal-pages.json"

const MainLayout = ({ title, Component }) => {
	return <>
		<ToastContainer position='bottom-left' autoClose={5000} theme="dark" />

		<Helmet>
			<title>{title + " - Midlou"}</title>
			<link rel="icon" href={favicon} />
			{/* <meta name="description" content="Helmet application" /> */}
		</Helmet>
		<div className="flex flex-col h-screen justify-between text-white">
			<header>
				<NavBar title={title} menuItems={InternalPages} />
			</header>
			<main className="flex-grow bg-gradient-to-r from-slate-600 to-slate-700">
				{Component}
			</main>
			<footer>
				<Footer />
			</footer>
		</div>

	</>
}

export default MainLayout;
