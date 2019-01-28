import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import reducer from './reducers';

import App from './containers/App';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const storeEnhancers = compose(
    applyMiddleware(thunk,promise()),
    window.devToolsExtension && window.devToolsExtension()
)

const store = createStore(reducer, storeEnhancers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));


