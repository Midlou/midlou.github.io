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
