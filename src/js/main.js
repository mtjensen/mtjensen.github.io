$(document).ready(function() {
	$('#fullpage').fullpage({
		menu: "#pageMenu",
		sectionsColor: ["#098ae0", "#fff", "#eee", "#fff"],
		recordHistory: false,
		autoScrolling: false,
		fitToSection: false,
		paddingTop: '50px',
		bigSectionsDestination: null,
		anchors: ['main', 'about', 'skills', 'contact']
	});
	$(".animsition").animsition({
		inClass: 'fade-in',
		outClass: 'fade-out',
		inDuration: '800',
		outDuration: '500'
	});
	$("#headline").fitText();

	$(".deutsch").on("click", function() {
		setLanguage(deutsch)
	});
	
	$(".english").on("click", function() {
		setLanguage(english)
	});
});