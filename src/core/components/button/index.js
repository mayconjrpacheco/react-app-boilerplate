import React, { Component } from 'react';
import './style.scss';

export default class Button extends Component {
	render() {
		return (
			<button>
				{this.props.title}
			</button>
		)
	}
}