import * as React from "react"

import ContainerGrid from "@components/containers/container-grid.jsx";
import _ from "lodash";
import { GatsbyImage } from "gatsby-plugin-image";
import If from "@components/conditionals/if";
import DividerLabel from "@components/dividers/divider-label";

function getImageFromQueryData(imageData, fileName) {
	let imageNode = _.find(imageData, {
		node: {
			childImageSharp: {
				parent: { name: fileName }
			}
		}
	});

	return imageNode?.node.childImageSharp.gatsbyImageData;
}

const HeaderRow = ({ imageData, pageContext }) => {
	return <ContainerGrid>
		<If render={pageContext.headerFileImage} body={() => {
			return <div className="flex justify-center container mx-auto">
				<GatsbyImage className="max-w-fit"
					image={getImageFromQueryData(imageData, pageContext.headerFileImage)}
					alt={pageContext.headerDescriptionImage} />
			</div>
		}} />
		<h1 className="font-bold text-4xl text-center my-4">
			{pageContext.label}
		</h1>
		<p className="text-xl text-center">
			{pageContext.description}
		</p>
	</ContainerGrid>
}

export default HeaderRow;
