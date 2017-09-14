import React from 'react';
import NavItem from './NavItem.react';
import styles from './styles';

let navigationStyle = {
	fontFamily: styles.fonts.openSans,
	fontWeight: 100,
	height: 150,
	backgroundColor: styles.colourPalette.turquoise,
	color: styles.colourPalette.offWhite,
	display: 'flex',
	alignItems: 'flex-end'
};

let navigationItemStyle = {
	display: 'inline-block'
};

export default class Navbar extends React.Component {
	render() {
		return (
			<div style={navigationStyle}>
				{
					this.props.items.map((item, index) => {
						return <div key={index} style={navigationItemStyle}>
							<NavItem navigationItemName={item}/>
						</div>
					})
				}
			</div>
		)
	}
}