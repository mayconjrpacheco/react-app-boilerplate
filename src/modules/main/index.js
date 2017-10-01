import React, { Component } from 'react'
import Navbar from 'component/navbar';

class Main extends Component {
	render() {
		return (
			<div className="d-flex rw-fill">
		  		
		        <div className="rw-main col p-0 d-flex flex-column">
		          <Navbar />

		          {this.props.children}

		        </div>
		    </div>
		)
	}
}

export default Main;