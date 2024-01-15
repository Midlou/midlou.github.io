import _ from "lodash";

export function get_current_year() {
    return new Date().getFullYear();
}

export function navigatePageBlank(e, link) {
	e.stopPropagation();
	window.open(link, "_blank");
}

export function get_image_url(thumbFilePath) {
	return new URL(thumbFilePath, import.meta.url).href
}

