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

const PageContent = ({ data, pageContext }) => {
	const { rowsContent } = GenericProjectPage({ data, pageContext });

	return <ContainerFlex>
		<Panel className="bg-gray-800 w-full">
			<div className="block rounded-lg shadow-lg bg-gray-700 text-white">
				<div className="flex flex-wrap justify-between items-center py-3 px-6 border-b border-gray-800">
					<h1 className="font-bold text-2xl">
						{pageContext.label}
						{/* <If render={pageContext.pageLink} body={() => <Link
						to={pageContext.pageLink} className="stylized-link">Site
					</Link>
					} /> */}
					</h1>
					<span className="text-base">
						{pageContext.description}
					</span>

				</div>
				{
					rowsContent
				}
			</div>
		</Panel>
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
