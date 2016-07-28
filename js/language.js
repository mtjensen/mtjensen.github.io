var english = { 
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
						'Email me',
						'Check out my resume'],
	footer: ['Icons selected with care from icon8. Cover photo courtesy of Unsplash.']
};

var deutsch = { 
	menu: [	'Über mich', 
					'Fähigkeiten', 
					'Kontakt'],
	main: [	'Ich bin ein einsteigender',
					'Frontend-Entwickler',
					'auf der Suche nach dem nächsten Schritt'],
	about: ['Lernen Sie mich kennen',
					'1980 in Neuseeland geboren, ich habe einen Bachelors Abschluss in Geschichte und habe auf vier Kontinenten und in mehr als 12 Länder gelebt, gereist und gearbeitet. Ich spreche Englisch als Muttersprache und fließendes Deutsch nach vier Jahren selbst geführtes Lernen. Seit 2014 widme ich mich meiner Fazsination von Rechner und Technik, indem ich mir selbst die moderne Webentwicklung beibringe. Seit 2015 lebe ich im Norden Deutschlands und jetzt suche ich eine Stelle als Junior Frontend Entwickler.'],
	skills: [	'Was ich einbringe', 
						'Web',
						'Lieben Sie das Web? Ich auch! Deswegen habe ich alles gegeben, um nicht nur seine Grundlagen zu meistern, sondern auch seine neuesten Entwickungen - HTML5, CSS3, LESS and mehr.', 
						'Javascript', 
						'Als Applikationsprache des Webs blüht Javascript unwiederstehbar auf. Ich habe starke Kenntnisse in JS und jQuery, sowie Grundwissen im neusten ES6.', 
						'Frameworks', 
						'Heutzutage sind Frontendler mit der Auswahl leistungsstarker Frameworks absolut verwöhnt. Ich bin großer fan von Bootstrap and Angular, unter anderem.', 
						'Node', 
						'Node.js ist eine mächtige Plattform zum Ausführen Javascript Programme. Ich habe Erfahrung in Node, sowohl als auch Express, das beliebte Node Webserver.', 
						'Entwicklertools',
						'Jeder Entwickler braucht leistungsfähige und vertrauenswürdige Werkzeuge. Ich wende an Sublime Text mit dem Emmet Plugin, sowie Gulp, npm, Vim und Fish Shell.', 
						'Kommunikation', 
						'Kommunikation ist König. Ich habe es immer geliebt, mich auszudrücken und mit anderen zu unterhalten, ob schriftlich oder mündlich. Zudem lege ich gründlich und klar dokumentiertes Code ans Herzen.', 
						'Zusammenarbeit', 
						'Das Softwareentlickung ist ein Gruppenspiel. Ich liebe es, in einem Team zu arbeiten, und ich biete entsprechende Fähigkeiten in der klaren Planung, Führung und Kompromisseschließen an.',
						'Kreativität',
						'Ich habe im Leben Geschichten geschrieben, Instrumente gespielt und bin ein Paar Mal auf die Bühne gekommen. Gute Programmier begehen immer ungewöhnliche Denkweisen - und das versuche ich auch.'],
	contact: ['Interessiert?',
						'Schicken Sie mir eine Email',
						'Schauen Sie meinen Lebenslauf an.'],
	footer: ['Ikone sorgfältig bei icon8 ausgewählt. Hauptfoto mit freundlicher Genehmigung von Unsplash.']
};

var setLanguage = function(language) {
	for (var prop in language) {
		for (i=0; i < language[prop].length; i++) {
			var category = '#' + prop;
			var item = '.text' + (i + 1);
			var fillText = language[prop][i];
			// var existing = $(category).find(item).html();

			$(category).find(item).html(fillText);

		}
	}
}

setLanguage(english);