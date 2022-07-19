import * as React from "react"

import MainLayout from '@components/layouts/main';
import ContainerFlex from "@components/containers/container-flex";

import GenericProjectPage from "./controllers/generic-project-page.controller.jsx";
import { graphql } from 'gatsby'
import LinksRow from "@components/page-rows/links-row.jsx";
import HeaderRow from "@components/page-rows/header-row.jsx";

const PageContent = ({ data, pageContext }) => {
	const { rowElements, imageData, links } = GenericProjectPage({ data, pageContext });

	return <ContainerFlex className="px-5">
		<div className="lg:w-3/4">
			<HeaderRow imageData={imageData} pageContext={pageContext}/>
			{
				rowElements
			}
			<LinksRow links={links}/>
		</div>
	</ContainerFlex>;
}

export const query = graphql`
  query ($name: String!) {
	allFile(filter: {relativeDirectory: {eq: $name}}) {
		edges {
		  node {
			childImageSharp {
			  gatsbyImageData(layout: CONSTRAINED placeholder: TRACED_SVG)
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
