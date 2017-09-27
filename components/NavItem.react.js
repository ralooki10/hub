import React from 'react';
import Link from 'next/link';
import styles from './styles';

export default class NavItem extends React.Component {
	navigationUrl = this.props.navigationItem.url != undefined ?
		this.props.navigationItem.url :
		'/';

	render() {
		let navigationItemStyle = {
			fontFamily: styles.fonts.openSans,
			fontSize: 20,
			padding: 15
		};

		let plainLinkStyle = {
			color: styles.colourPalette.offWhite,
			textDecoration: 'none'
		};

		return (
			<div style={navigationItemStyle} className="navigationItem">
				<Link href={this.navigationUrl}>
					<a style={plainLinkStyle}>{this.props.navigationItem.name}</a>
				</Link>
			</div>
		)
	}
}