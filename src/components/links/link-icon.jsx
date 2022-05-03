import React from "react";
import Icon from "../icons/icon";

const LinkIcon = ({ link, label, icon, target = "_blank" }) => {
	return <a href={link} target={target} className="hover:underline" rel={"noreferrer"}>
		<Icon className="mr-1" icon={icon} size={"lg"} />
		{
			label
		}
	</a>;
}

export default LinkIcon;
