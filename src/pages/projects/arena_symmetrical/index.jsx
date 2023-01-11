import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import MainLayout from "@components/layouts/main";

import ImageSlider from "@components/sliders/image-slider";
import DividerLabel from "@components/dividers/divider-label";
import ContainerFlex from "@components/containers/container-flex";
import HyperLink from "@components/links/hyper-link";

const PageContent = ({ data }) => {

	let screenshots = data.allFile.edges;

	return <ContainerFlex className="px-4 flex-col mx-auto lg:w-3/4 md:max-w-4xl text-justify">
		<DividerLabel label="Achievement arena symmetrical" />
		<p>
			<b>Achievement arena symmetrical</b> is a Team Fortress 2 map I made back in 2016, it was my first 100% original map.
			It was expired by maps like achievement idlefight, achivement engineer and achievement awesomebox. 
			If I'm not mistaken, I never posted this map on the internet.
		</p>
		<br />
		<p>
			The version I'm currently making available for download is <b>version 4</b>, a simple edit of version 3 where I've added a default cubemap, the rest hasn't changed.
			We don't talk about version 1 and 2.
		</p>
		<br />
		<p>
			It's important for me to let you know that when I made this map I had less than 6 months of level design and Hammer Editor experience, so expect some weird stuff.
		</p>
		<br />
		<p>
			<b>BSP</b>: <HyperLink link={"/downloads/bsp_achievement_arenasymmetrical_4.zip"} label="Download" />
		</p>
		<p>
			<b>VMF</b>: <HyperLink link={"/downloads/vmf_achievement_arenasymmetrical_4.zip"} label="Download" />
		</p>
		<DividerLabel label="Screenshots" />
		<ImageSlider>
			{
				screenshots.map((screenshot, index) => {
					return <GatsbyImage key={index} className="min-w-fit rounded-md"
						image={screenshot.node.childImageSharp.gatsbyImageData}
						alt={''} />
				})
			}
		</ImageSlider>
		<DividerLabel label="Related" />
		<b>Gamebanana</b>
		<a href="https://gamebanana.com/mods/421834" target={"_blank"}>
			<img src="https://gamebanana.com/mods/embeddables/421834?type=large"/>
		</a>
	</ContainerFlex>;
}

export const query = graphql`
  query {
	allFile(
		filter: {
			absolutePath: { regex: "/images/projects/arena-symmetrical/screenshots/" }
		},
	) {
		edges {
		  node {
			id
			childImageSharp {
			  gatsbyImageData(placeholder: BLURRED)
			}
		  }
		}
	  }
  }
`

const Layout = (props) => <MainLayout title={"Arena Symmetrical"} Component={<PageContent {...props} />} />;
export default Layout;
