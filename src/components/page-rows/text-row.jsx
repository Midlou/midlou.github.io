import * as React from "react"

import ContainerGrid from "@components/containers/container-grid.jsx";
import ResponsiveText from "@components/text/responsive-text";

const TextImageRow = ({ textContent }) => {
	return <ContainerGrid className={"grid-cols-3 gap-4"}>
		<div className="col-span-3 text-justify">
			<ResponsiveText>
				{textContent.text}
			</ResponsiveText>
		</div>
	</ContainerGrid>
}

export default TextImageRow;
