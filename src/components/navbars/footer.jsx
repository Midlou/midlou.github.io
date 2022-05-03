import React from "react";
import ExternalLinks from "../../content/external-links.json"

const Footer = () => {
    return <div className="text-white text-center p-4 bg-gray-800">
        <a href={ExternalLinks.github.link} className="stylized-link" rel="noreferrer" target="_blank">{ExternalLinks.github.label}</a>
    </div>
}

export default Footer;
