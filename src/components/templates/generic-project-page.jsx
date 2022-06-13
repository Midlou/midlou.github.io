import * as React from "react"
import { Link } from "gatsby";

import Panel from "@components/panels/panel";
import If from "@components/conditionals/if";
import MainLayout from '@components/layouts/main';
import ContainerFlex from "@components/containers/container-flex";
import ContainerGrid from "@components/containers/container-grid.jsx";

import GenericProjectPage from "./controllers/generic-project-page.controller.jsx";
import { StaticImage } from "gatsby-plugin-image";
import { graphql } from 'gatsby'
import DividerLabel from "@components/dividers/divider-label.jsx";

const PageContent = ({ data, pageContext }) => {
	const { rowsContent } = GenericProjectPage({ data, pageContext });

	return <ContainerFlex>
		{/* <div className="lg:w-3/4 divide-y divide-double divide-slate-700"> */}
		<div className="lg:w-3/4">
			<div className="md:w-full my-6">
				<h1 className="font-bold text-4xl text-center my-4">
					{pageContext.label}
				</h1>
				<p className="text-lg text-justify">
					{pageContext.description}
				</p>
			</div>
			{
				rowsContent
			}
		</div>
	</ContainerFlex>;
}

export const query = graphql`
  query ($name: String!) {
	allFile(filter: {relativeDirectory: {eq: $name}}) {
		edges {
		  node {
			childImageSharp {
			  gatsbyImageData(layout: CONSTRAINED)
			  parent {
				... on File {
				  name
				}
			  }
			}
		  }
		}
	  }
  }
`

const Layout = (props) => <MainLayout title={props?.pageContext?.label || ""} Component={<PageContent {...props} />} />;
export default Layout;
