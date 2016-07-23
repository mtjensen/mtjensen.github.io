$(document).ready(function() {
    $('#fullpage').fullpage({
    	scrollingSpeed: 600,
    	menu: "#pageMenu",
    	sectionsColor: ["#098ae0", "#fff", "#32e292", "#fff", "#eee"],
    	navigation: true,
    	loopTop: true,
    	loopBottom: true,
    	touchSensitivity: 15,
    	recordHistory: false,
        autoScrolling: false,
        fitToSection: false
    });
    $(".animsition").animsition({
    	inClass: 'fade-in',
    	outClass: 'fade-out'
    })
});