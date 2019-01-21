import React from 'react';
import ReactDOM from 'react-dom';

import './includes/bootstrap.js';
import './includes/styles.js';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
