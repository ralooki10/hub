import React from 'react';
import NavItem from './NavItem.react';
import styles from './styles';

export default class Navbar extends React.Component {
	render() {
		let navigationStyle = {
			fontFamily: styles.fonts.openSans,
			fontWeight: 100,
			height: 100,
			backgroundColor: styles.colourPalette.turquoise,
			color: styles.colourPalette.offWhite,
			textAlign: 'center'
		};

		return (
			<div style={navigationStyle}>
				<NavItem/>
				<NavItem/>
				<NavItem/>
			</div>
		)
	}
}