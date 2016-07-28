var englishText = { 
	menu: [	'About', 
					'Skills', 
					'Contact'],
	main: [	'I am a junior',
					'Frontend Developer',
					'looking for opportunities in Europe'],
	about: ['Get to know me',
					'Born in New Zealand in the late 1980s, I have a degree in history and have lived, travelled and worked on four continents and in over a dozen countries. I speak native English, as well as fluent German after four years of self-directed learning. Since 2014 I have pursued my interest in computers and programming, teaching myself modern web application development. I am fascinated by web development because I view the web as the truly '],
	skills: [	'What I can do', 
						'Web',
						'Love the web? Me too! So of course I\'ve worked to master not just its building blocks, but the latest advancements in the world\'s computing platform: HTML5, CSS3, LESS and more.', 
						'Javascript', 
						'Javascript is thriving as the web\'s programming language. I\'ve developed strong skills in JS and jQuery, as well as studied up on the latest in ES6.', 
						'Frameworks', 
						'Frontend devs these days are spoiled for choice when it comes to powerful frameworks. I\'m a fan of Bootstrap and Angular.', 
						'Node', 
						'Node.js is a powerful environment for Javascript execution. I have experience in Node, as well as Express, the popular Node web server.', 
						'Development',
						'Every dev needs a solid development workchain. I use Sublime Text with the Emmet plugin, as well as Gulp, npm, Vim and the Fish shell.', 
						'Communication', 
						'Communication is key. I have a strong background in writing and debate, love expressing my ideas, and I am serious about clear, well-documented code.', 
						'Teamwork', 
						'Developing software is a team sport. I love working in teams, and I have skills in constructive plannning, leadership and negotiation to match.',
						'Creativity',
						'In my life I\'ve played music, acted, written, and always thought outside the box. Good programmers always work to see a problem from a new perspective.'],
	contact: ['Interested?',
						'Email me: ',
						'Check out my resume'],
	footer: ['Icons selected with care from icon8. Cover photo courtesy of Unsplash.']
};

for (var prop in englishText) {
	for (i=0; i < englishText[prop].length; i++) {
		var category = '#' + prop;
		var item = '.text' + (i + 1);
		var fillText = englishText[prop][i];
		var existing = $(category).find(item).html();

		$(category).find(item).html(fillText + existing);

	}
}