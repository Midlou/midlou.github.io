import _ from "lodash";
import { navigate } from "gatsby";

export function getCurrentYear() {
    return new Date().getFullYear();
}

export function navigatePageBlank(e, link) {
	e.stopPropagation();
	window.open(link, "_blank");
}

export function navigatePage(e, link) {
	e.stopPropagation();
	navigate(link);
}

export function getImageFromQueryData(imageData, fileName) {
	let imageNode = _.find(imageData, {
		node: {
			childImageSharp: {
				parent: { name: fileName }
			}
		}
	});

	return imageNode?.node.childImageSharp.gatsbyImageData;
}
