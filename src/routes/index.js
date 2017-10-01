import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Main from '../modules/main';
import Home from '../modules/home';

const Routes = () => (
	<Router history={ browserHistory }>
		<Route path='/' component={ Main }>
			<IndexRoute component={ Home } />
		</Route>
	</Router>
)

export default Routes;