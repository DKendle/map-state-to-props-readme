import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import counterReducer from './reducers/counterReducer.js';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';

const store = createStore(
    counterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); 

ReactDOM.render(
<Provider>
    <App store={store}/>
</Provider>,
     document.getElementById('root')
     );
