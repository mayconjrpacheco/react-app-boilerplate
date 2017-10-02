import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import store from '../store';
import Main from '../modules/main';
import Home from '../modules/home';

const Routes = () => (
	<Provider store={ store }>
		<Router history={ browserHistory } key={Math.random()}>
			<Route path='/' component={ Main }>
				<IndexRoute component={ Home } />
			</Route>
		</Router>
	</Provider>
)

export default Routes;