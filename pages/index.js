import React from 'react'
import Head from '../components/Head.react'
import Navbar from '../components/Navbar.react'

export default class extends React.Component {
	render() {
		return (
			<div>
				<Head/>
				<Navbar/>
				Hello World!
			</div>
		)
	}
}