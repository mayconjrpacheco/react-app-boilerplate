import React from 'react';
import { render } from 'react-dom';
import Routes from './routes';
import './core/style/main.scss';

render(<Routes />, global.document.querySelector('#root'))