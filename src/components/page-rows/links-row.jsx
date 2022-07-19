import * as React from "react"

import ContainerGrid from "@components/containers/container-grid.jsx";
import DividerLabel from "@components/dividers/divider-label";
import If from "@components/conditionals/if";
import { Link } from "gatsby";

const LinksRow = ({ links }) => {
	return <ContainerGrid>
		<If render={links} body={() => {
			return <div>
				<DividerLabel label="Links" />
				{
					links.map((value, key) => {
						return value.isInternal

							? <Link key={key} className="stylized-link" to={value.link}>
								{value.label}
							</Link>

							: <div key={key}>
								<a className="stylized-link" href={value.link} rel="noreferrer" target="_blank">{value.label}</a>
							</div>;
					})
				}
			</div>
		}} />
	</ContainerGrid>
}

export default LinksRow;
