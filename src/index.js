import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//third party libraries
//redux
import {createStore,applyMiddleware}  from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/root-reduce';

const store=createStore(reducer);

ReactDOM.render(
<Provider store={store}><App /></Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();