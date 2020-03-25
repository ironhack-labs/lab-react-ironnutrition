import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import { App } from './App';
import './stylesheets/style.scss';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('root'));
});
