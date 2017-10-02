import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import applicationReducer from './state/application/application-reducer';

const reducers = combineReducers({
	applicationReducer
});

let store = createStore(reducers, composeWithDevTools());

export default store;