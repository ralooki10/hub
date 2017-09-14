import React from 'react';
import styles from './styles';

export default class NavItem extends React.Component {
	render() {
		let navigationItemStyle = {
			fontFamily: styles.fonts.openSans,
			color: styles.colourPalette.offWhite
		};

		return (
			<div style={navigationItemStyle}>I'm a navigation item</div>
		)
	}
}