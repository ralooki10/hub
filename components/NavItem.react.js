import React from 'react';
import styles from './styles';

export default class NavItem extends React.Component {
	render() {
		let navigationItemStyle = {
			fontFamily: styles.fonts.openSans,
			fontSize: 20,
			color: styles.colourPalette.offWhite,
			padding: 15
		};

		return (
			<div style={navigationItemStyle} className="navigationItem">{this.props.navigationItemName}</div>
		)
	}
}