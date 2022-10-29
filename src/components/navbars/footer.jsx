import React from "react";

import { EXTERNAL_LINKS } from "@constants/external-links";

import HyperLink from "@components/links/hyper-link";

const Footer = () => {
    return <div className="text-white text-center p-4 bg-gray-800">
		<HyperLink link={EXTERNAL_LINKS.github.link} label={EXTERNAL_LINKS.github.label}/>
    </div>
}

export default Footer;
