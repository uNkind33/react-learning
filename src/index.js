import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';

import App from './components/app';
// import reducer from './reducers';

import './assets/css/styles.css';

// const store = createStore(
//     reducer,
//     compose(
//         applyMiddleware(thunk),
//         window.devToolsExtension ? window.devToolsExtension() : f => f,
//     ),
// );

ReactDOM.render(
    <App />,
    document.getElementById('app'),
);
