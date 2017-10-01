import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Main from '../modules/main';
import Home from '../modules/home';

const Routes = () => (
	<Router history={ browserHistory } key={Math.random()}>
		<Route path='/' component={ Main }>
			<IndexRoute component={ Home } />
		</Route>
	</Router>
)

export default Routes;