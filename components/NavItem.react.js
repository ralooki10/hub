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
			color: styles.colourPalette.offWhite,
			padding: 15
		};

		return (
			<div style={navigationItemStyle} className="navigationItem">
				<Link href={this.navigationUrl}>
					<a>{this.props.navigationItem.name}</a>
				</Link>
			</div>
		)
	}
}