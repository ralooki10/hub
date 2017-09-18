import React from 'react'
import Head from '../components/Head.react'
import Navbar from '../components/Navbar.react'
import {content, getBlurbForPage} from '../content/content'

export default class extends React.Component {
	render() {
		return (
			<div>
				<Head/>
				<Navbar items={ content }/>
				{getBlurbForPage('Recommendations')}
			</div>
		)
	}
}