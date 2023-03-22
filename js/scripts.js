for (const link of document.querySelectorAll("a[href]")) {
	if(link.href == document.location.href) {
		link.classList.add("current");
	}
}
