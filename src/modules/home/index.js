import React, { Component } from 'react';
import store from '../../store';
import { connect } from 'react-redux';
import Button from 'component/button';
import { changeTitle } from '../../state/application/application-actions';

class Home extends Component {
	render() {
		return (
			<div>
				<button
					onClick={e => store.dispatch(changeTitle('Teste')) }>
					Teste
				</button>
				{ console.log(store.getState()) }
			</div>
		);
	}
}

Home = connect()(Home);
export default Home;