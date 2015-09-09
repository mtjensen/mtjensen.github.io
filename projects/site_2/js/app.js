var currentColour = $(".selected").css("background-color");
var context = $("canvas")[0].getContext("2d");
var mouseDownOnCanvas = false;
var lastEvent;
var lineWidth = 1.0;

var lastAddedColour;
var mouseOverCancelButton = false;
var mouseOverNewColour = false;

//Function for setting the colour of the demo span
function changeDemoColour() {
	var red = $("#red input").val()
		, blue = $("#blue input").val()
		, green = $("#green input").val()
		, opacity = $("#opacity input").val() / 10
		, setBackground = "rgba(" + red + "," + blue + "," + green + "," + opacity + ")";

	$("#newColourDemo").css("background-color", setBackground);
}

function changeSelectedColour(target) {
	target.siblings().removeClass('selected');
	target.addClass('selected');
	currentColour = $(".selected").css("background-color");
}

//Change the selected colour
$("#colourSelect").on("click", "li", function(e) {
	if (e.which = 1) {
		changeSelectedColour($(this));
	} 
})

//Show the dropdown on click
$("#toggleDropdown button").on("click", function(e) {
	if (e.which = 1) {
		$("#dropdownContainer").fadeToggle();
	}
});

//Update the colour demo when the sliders are altered
$("input[type=range]").on("input", changeDemoColour);

//Add new colour on button click
$("#addNewColour").on("click", function(e) {
	var candidateNewColour = $("#newColourDemo").css("background-color");

	if (e.which = 1 && lastAddedColour != candidateNewColour) {
		var $newColour = $("<li><div></div></li>");
		$("#colourSelect ul").append($newColour);
		$newColour.css("background-color", candidateNewColour);
		lastAddedColour = candidateNewColour;
		changeSelectedColour($newColour);
	}
});

//Drawing logic
$("canvas").on("click", function(e) {
	console.log(e.offsetX);
	console.log(e.offsetY);
}).mousedown(function(e) {
	mouseDownOnCanvas = true;
	lastEvent = e;
}).mousemove(function(e) {
	if (mouseDownOnCanvas) {
		context.lineWidth = lineWidth;
		context.strokeStyle = currentColour;
		context.beginPath();
		context.moveTo(lastEvent.offsetX, lastEvent.offsetY)
		context.lineTo(e.offsetX, e.offsetY);
		context.stroke();
		lastEvent = e;
	}
}).mouseup(function() {
	mouseDownOnCanvas = false;
}).mouseleave(function() {
	mouseDownOnCanvas = false;
});

//Display delete button for new colours on mouseover
$("#colourSelect").on("mouseenter", "li", function() {
	mouseOverNewColour = true;
	$(this).children("div").delay(250).fadeIn("fast");
}).on("mouseleave", "li", function() {
	mouseOverNewColour = false;
	if (!mouseOverCancelButton) {	$(this).children("div").fadeOut("fast") }
}).on("mouseenter", "li div", function() {
	mouseOverCancelButton = true;
}).on("mouseleave", "li div", function() {
	mouseOverCancelButton = false;
	if (!mouseOverNewColour) { $(this).fadeOut("fast") }
}).on("click", "li div", function(e) {
	if (e.which == 1) {
		if ($(this).parent().css("background-color") == lastAddedColour) { lastAddedColour = undefined; }
		$(this).parent().remove();
	}
});

//Initialisation: reset the sliders, set the demo span
document.newColourSliders.reset();

changeDemoColour();

////Extras:
//There should be a limit to the number of colours addable.
//There should be an eraser
//There should possibly be a way to alter a colour
//A way to change line width
//Slider should reset to default values when page reloads?
//Improve smoothness of line
//Delay the display/hide of the delete colour button