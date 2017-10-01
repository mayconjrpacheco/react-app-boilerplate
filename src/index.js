import React from 'react';
import { render } from 'react-dom';
import Routes from './routes';
import 'scss/main.scss';

render(<Routes />, global.document.querySelector('#root'))