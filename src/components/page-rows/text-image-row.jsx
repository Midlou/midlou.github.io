import * as React from "react"

import If from "@components/conditionals/if";
import ContainerGrid from "@components/containers/container-grid.jsx";
import { GatsbyImage } from "gatsby-plugin-image";

const TextImageRow = ({ imageContent, textContent }) => {
	return <ContainerGrid className={"grid-cols-3 gap-4 py-3"}>
		<If render={imageContent.image} body={() => {
			return <div className="col-span-1">
				<div className="w-full">
					<GatsbyImage image={imageContent.image} alt={imageContent.description}
						className="sm:max-w-xs md:max-w-sm rounded-2xl" />
				</div>
				<span>{imageContent.description}</span>
			</div>
		}} />
		<div className="col-span-2 text-lg text-justify">
			{textContent.text}
		</div>
	</ContainerGrid>
}

export default TextImageRow;
