import React from 'react';
import ReactDOM from 'react-dom';

// ASSETS
import 'bulma/css/bulma.css';
import './assets/styles.css';

// MAIN APP
import { App } from './App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
