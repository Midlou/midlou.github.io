import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

// icon
import MiceblocksIcon from "../../assets/images/miceblocks/miceblocks-gold-block-32x.png";

// components
import MiceblocksFooter from "../navbars/miceblocks-footer";

const MiceblocksLayout = ({ title, Component }) => {
	return <HelmetProvider>
		<Helmet>
			<title>{title}</title>
			<link rel="icon" href={MiceblocksIcon} />
		</Helmet>
		<div className="flex flex-col h-screen justify-between text-white">
			<main className="flex-grow">
				{Component}
			</main>
			<footer>
				<MiceblocksFooter />
			</footer>
		</div>

	</HelmetProvider>
}

export default MiceblocksLayout;
