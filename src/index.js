import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//third party libraries
//redux
import {createStore,applyMiddleware,combineReducers,compose}  from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/root-reduce';
import secondReducer from './reducers/array-reduce';
//Thunk
import thunk from 'redux-thunk';

//combine reducers
const rootReducer = combineReducers({
        red1:reducer,
        red2:secondReducer
});
//custom middleware

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
<Provider store={store}><App /></Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
