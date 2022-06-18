import React from "react";
import { Helmet } from 'react-helmet';
import { getImage } from "gatsby-plugin-image"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { graphql, useStaticQuery } from 'gatsby';
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from 'gatsby-background-image';

import favicon from '@images/miceblocks/gold_block-32x.png';
import MiceblocksFooter from '@components/navbars/miceblocks-footer';

const MiceblocksLayout = ({ title, Component }) => {
	const { miceblocksBgAsImage } = useStaticQuery(graphql`query {
		miceblocksBgAsImage: file(
			relativePath: { 
				eq: "miceblocks/background-miceblocks-1920x1080.png" 
			},
			sourceInstanceName: {
				eq: "images"
			}
		) {
			childImageSharp {
					gatsbyImageData(
					quality: 90
					width: 1980
					height: 1080
					placeholder: BLURRED
					formats: [WEBP]
				)
			}
		}
	}`)
	const miceblocksBgImage = convertToBgImage(getImage(miceblocksBgAsImage));

	return <>
		<ToastContainer position='bottom-left' autoClose={5000} theme="dark" />

		<Helmet>
			<title>{title}</title>
			<link rel="icon" href={favicon} />
		</Helmet>
		<div className="flex flex-col h-screen justify-between text-white">
			<header>
				{/* <NavBar title={title} menuItems={InternalPages} /> */}
			</header>
			<main className="flex-grow">
				<BackgroundImage
					Tag="section"
					{...miceblocksBgImage}
					className="background-cover"
					preserveStackingContext
				>
					{Component}
				</BackgroundImage>
			</main>
			<footer>
				<MiceblocksFooter />
			</footer>
		</div>

	</>
}

export default MiceblocksLayout;
