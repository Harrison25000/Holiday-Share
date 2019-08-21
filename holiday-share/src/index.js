import React from 'react';
import ReactDOM from 'react-dom';
import './JS-Frontend/index.css';
import App from './JS-Frontend/App.js';
import * as serviceWorker from './JS-Frontend/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
