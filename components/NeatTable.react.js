import React from 'react';
import styles from './styles';

let left = {
	display: 'inline-block',
	padding: 10,
	width: 200
};

let table = {
	fontFamily: styles.fonts.openSans,
	paddingBottom: 10,
	institution: {
		fontWeight: 700,
		fontSize: 24
	},
	timeline: {
		fontWeight: 200
	},
	course: {
		fontSize: 16
	},
	logo: {
		height: 50,
		float: 'right'
	},
	inline: {
		display: 'inline-block'
	}
};

export default class NeatTable extends React.Component {
	render() {
		const educationItem = this.props.education.map((item) =>
			<div style={table}>
				<div style={left}>
					<img style={table.logo} src={item.logo}/>
				</div>
				<div style={table.inline}>
					<div style={table.institution}>{item.institution}</div>
					<i style={table.timeline}>{item.startDate} - {item.endDate}, {item.location}</i>
					<div style={table.course}>{item.course} - {item.grade}</div>
				</div>
			</div>
		);

		return (
			<div>{educationItem}</div>
		)
	}
}