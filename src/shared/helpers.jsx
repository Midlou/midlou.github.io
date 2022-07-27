export function getCurrentYear() {
    return new Date().getFullYear();
}

export function navigatePageBlank(e, link) {
	e.stopPropagation();
	window.open(link, "_blank")
}
