import { EXTERNAL_LINKS } from "@constants/external-links";
import React from "react";

const Footer = () => {
    return <div className="text-white text-center p-4 bg-gray-800">
        <a href={EXTERNAL_LINKS.github.link} className="stylized-link" rel="noreferrer" target="_blank">{EXTERNAL_LINKS.github.label}</a>
    </div>
}

export default Footer;
