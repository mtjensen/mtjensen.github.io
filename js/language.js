var englishText = { 
	menu: ['About', 'Skills', 'Contact'],
	// main: ['I am a junior', 'Frontend Developer', 'looking for opportunities in Europe'],
	// about: []
};

for (var prop in englishText) {
	for (i=0; i < englishText[prop].length; i++) {
		var category = '#' + prop;
		var item = '.text' + (i + 1);
		var fillText = englishText[prop][i];


		$(category).find(item)

			.text(fillText);

	}
}