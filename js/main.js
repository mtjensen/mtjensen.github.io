$(document).ready(function() {
    $('#fullpage').fullpage({
    	// scrollingSpeed: 600,
    	menu: "#pageMenu",
        // sectionsColor: ["#098ae0", "#fff", "#32e292", "#fff", "#eee"],
    	sectionsColor: ["#098ae0", "#fff", "#eee", "#fff"],
    	// navigation: true,
    	// loopTop: true,
    	// loopBottom: true,
    	// touchSensitivity: 15,
    	recordHistory: false,
        autoScrolling: false,
        fitToSection: false,
        onLeave: function(index, nextIndex, direction) {
            if (index == 1 && direction == "down") {
                $('nav').addClass('.navbar-shrink')
            }
        }
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