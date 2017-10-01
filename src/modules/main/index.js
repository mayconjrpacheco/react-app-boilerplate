import React, { Component } from 'react'

export default class Main extends Component {
	render() {
		return (
			<div>
				<header>
					ESCHOLAR
				</header>
				<main>
					{this.props.children}
				</main>
			</div>
		)
	}
}