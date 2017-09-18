function getBlurbForPage(itemName) {
	return content.filter(item => item.name == itemName)[0].blurb;
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
		blurb: 'University of Manchester'
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

export { content, getBlurbForPage }