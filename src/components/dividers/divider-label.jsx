import React from "react";

const cellTypes = [
	{ name: "left", class: "pr-4" },
	{ name: "center", class: "p-4" },
	{ name: "right", class: "pl-4" }
];

function getColumn(label, direction, type) {
	let uniqueKey = type.name + '-' + label.replace(/\s+/g, '-').toLowerCase();

	if (direction === type.name) {
		return <td key={uniqueKey} className={`${type.class} w-px whitespace-nowrap`}>
			<b>{label}</b>
		</td>
	}

	return <td key={uniqueKey} className="m-0 p-0">
		<hr />
	</td>
}

export default function DividerLabel({ label = "", direction = "center" }) {
	return (
		<table className="w-full">
			<tbody>
				<tr>
					{
						cellTypes.map((type) => getColumn(label, direction, type))
					}
				</tr>
			</tbody>
		</table>
	);
}
