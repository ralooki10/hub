function getBlurbForPage(itemName) {
	return content.filter(item => item.name === itemName)[0].blurb;
}

let content = [
	{
		name: 'About me',
		url: '/',
		blurb: 'Some introductory stuff about me'
	},
	{
		name: 'Education',
		url: '/education',
		blurb:
			[
				{
					institution: 'The University of Manchester',
					course: 'MEng Computer Science',
					location: 'Manchester, United Kingdom',
					startDate: 'September 2010',
					endDate: 'June 2014',
					grade: '2:1',
					logo: '../static/manchester-logo.png'
				},
				{
					institution: 'National College "Mircea cel Batran"',
					course: 'Baccalaureate: Romanian Language, Maths, Computer Studies',
					location: 'Constanta, Romania',
					startDate: 'September 2006',
					endDate: 'June 2010',
					grade: '9.81/10',
					logo: '../static/cnmb-logo.jpg'
				},
				{
					institution: 'National College "Mircea cel Batran"',
					course: 'GCSE: Romanian Language, Maths, Geography',
					location: 'Constanta, Romania',
					startDate: 'September 2003',
					endDate: 'June 2006',
					grade: '9.89/10',
					logo: '../static/cnmb-logo.jpg'
				}
			]
	},
	{
		name: 'Projects',
		url: '/projects',
		blurb: 'Not sure what to put in here'
	},
	{
		name: 'Recommendations',
		url: '/other',
		blurb: 'nordic.js is an awesome conference'
	}
];

export {content, getBlurbForPage}