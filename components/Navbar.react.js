import React from 'react';

let colourPalette = {
	coral: '#E1757C',
	darkBlue: '#023043',
	hotPink: '#D0265F',
	lightGrey: '#A5BDC0',
	offWhite: '#FEFDFE',
	turquoise: '#22A9AF'
};

export default class Navbar extends React.Component {
	render() {
		let navigationStyle = {
			height: 100,
			backgroundColor: colourPalette.turquoise,
			color: colourPalette.offWhite,
			textAlign: 'center'
		};

		return (
			<div className="navigation" style={navigationStyle}>
				<p>A link in the navbar</p>
				<p>Another link in the navbar</p>
				<p>Blah blah blah</p>
			</div>
		)
	}
}