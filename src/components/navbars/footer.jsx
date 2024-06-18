import React from "react";

// components
import HyperLink from "../links/hyper-link";

// constants
import { EXTERNAL_LINKS } from "../../constants/external-links";

const Footer = () => {
    return <div className="text-white text-center p-4 bg-gray-700">
		<HyperLink link={EXTERNAL_LINKS.github.link} label={EXTERNAL_LINKS.github.label}/>
    </div>
}

export default Footer;
