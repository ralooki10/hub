import React from 'react'
import Head from '../components/Head.react'
import Navbar from '../components/Navbar.react'

let navbarItems = ['About me', 'Education', 'Projects', 'Recommendations'];

export default class extends React.Component {
	render() {
		return (
			<div>
				<Head/>
				<Navbar items={navbarItems}/>
				Hello World!
			</div>
		)
	}
}