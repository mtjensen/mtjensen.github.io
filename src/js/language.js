var english = { 
	menu: [	'About', 
					'Skills', 
					'Contact'],
	section0: [	'I am a junior',
					'Frontend Developer',
					'looking for opportunities in Europe'],
	section1: ['Get to know me',
					'Born in New Zealand in the late 1980s, I have a degree in history and have lived, travelled and worked on four continents and in over a dozen countries. I speak native English, as well as fluent German after four years of self-directed learning. Since 2014 I have pursued my interest in computers and programming, teaching myself modern web application development.'],
	section2: [	'What I can do', 
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
	section3: ['Interested?',
						'Email me'],
	footer: ['Icons selected with care from icon8. Cover photo courtesy of Unsplash.']
};

var deutsch = { 
	menu: [	'Über mich', 
					'Fähigkeiten', 
					'Kontakt'],
	section0: [	'Ich bin ein Junior',
					'Frontend-Entwickler',
					'auf der Suche nach dem nächsten Schritt'],
	section1: ['Das bin ich',
					'Ich bin 1989 in Dunedin, Neuseeland geboren, habe dort bis zum Ende meines Bachelorstudiums im Bereich Geschichte gelebt. Kurz darauf habe ich für ein Jahr in Australien gearbeitet, habe Asien bereist und bin letztendlich August 2015 nach Deutschland gezogen. Seit 2014 widme ich mich meiner Faszination von Computern, Technik und Programmierung und erlerne eigenständig Webentwicklung und verschiedene Programmiersprachen. Zurzeit suche ich eine Stelle als Junior Frontend Entwickler, um meine Kenntnisse weiter auszubauen und meine Fähigkeiten unter Beweis zu stellen.'],
	section2: [	'Was ich biete', 
						'Web',
						'Liebst du das Web? Ich auch! Deswegen habe ich alles gegeben, um nicht nur die Grundlagen von Webtechnologien zu meistern, sondern auch den Überblick über die neuesten Entwicklungen zu erwerben - HTML5, CSS3, LESS und mehr.', 
						'Javascript', 
						'Als Applikationssprache des Webs blüht Javascript unaufhaltsam auf. Ich habe erweiterte Kenntnisse in JS und jQuery, sowie Grundwissen im neusten ES6.', 
						'Frameworks', 
						'Heutzutage sind Frontendentwickler mit der Auswahl leistungsstarker Frameworks absolut verwöhnt. Es macht Spaß, Erfahrungen mit verschieden Frameworks zu machen - unter anderem habe ich mit Bootstrap und Angular gearbeitet.', 
						'Node', 
						'Node.js ist eine mächtige Plattform zum Ausführen von Javascript Programmen. Ich habe Erfahrung in Node, sowohl als auch Express, dem beliebte Node Webserver.', 
						'Entwicklertools',
						'Jeder Entwickler braucht leistungsfähige und vertrauenswürdige Werkzeuge. Ich verwende Sublime Text mit dem Emmet Plugin, sowie Gulp, npm, Vim und Fish Shell.', 
						'Kommunikation', 
						'Kommunikation ist der Schlüssel. Ich habe es immer geliebt, mich zu artikulieren und mit anderen zu unterhalten, ob schriftlich oder mündlich. Zudem wertschätze ich gründlich und klar dokumentierten Code.', 
						'Zusammenarbeit', 
						'Entwicklung ist ein Gruppenspiel. Ich liebe es, in einem Team zu arbeiten, und ich biete entsprechende Fähigkeiten in klarer Planung, Führung und Kompromissschließung an.',
						'Kreativität',
						'Ich habe im Leben Geschichten geschrieben, Instrumente gespielt und bin ein Paar Mal auf die Bühne gekommen. Gute Programmierer begehen immer ungewöhnliche Denkweisen - und das strebe ich auch an.'],
	section3: ['Interessiert?',
						'Schick mir eine Email'],
	footer: ['Ikone sorgfältig bei icon8 ausgewählt. Hauptfoto mit freundlicher Genehmigung von Unsplash.']
};

var setLanguage = function(language) {
	var languageLabel = 'EN';

	if (language == deutsch) {
		languageLabel = 'DE';
	}

	for (var prop in language) {
		for (i=0; i < language[prop].length; i++) {
			var category = '#' + prop;
			var item = '.text' + (i + 1);
			var fillText = language[prop][i];
			$(category).find(item).html(fillText);
		}
	}

	$('.mfb-component__main-icon--resting').html(languageLabel);
}

setLanguage(deutsch);