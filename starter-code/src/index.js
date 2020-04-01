import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import 'bulma/css/bulma.css';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
