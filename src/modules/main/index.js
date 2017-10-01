import React, { Component } from 'react'
import Navbar from 'component/navbar';

export default class Main extends Component {
	render() {
		return (
			<div>
				<header>
					<Navbar />
				</header>
				<main>
					{this.props.children}
				</main>
			</div>
		)
	}
}