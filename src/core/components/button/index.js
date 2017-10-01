import React, { PropTypes, Component } from 'react';
import './style.scss';

class Button extends Component {
	render() {
		return (
			<button className="es-button btn btn-primary">
				{this.props.title}
			</button>
		)
	}
}

Button.propTypes = {
	title: PropTypes.string
}

Button.defaultProps = {
	title: 'Defaults'
}

export default Button;