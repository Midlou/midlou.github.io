import React from "react";

function getItemListContent(item) {
	if (item.element) return item.element;

	return <>{item.title}: {item.label}</>
}

const DefaultList = ({ items = [] }) => {
	return <div className="flex">
		<ul className="rounded-lg w-96">
			{
				items.map((item) => {
					return <li key={item.value} className="px-4 py-2 border-b border-slate-500 w-full">
						{getItemListContent(item)}
					</li>
				})
			}
		</ul>
	</div>;
}

export default DefaultList;
