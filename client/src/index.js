import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'redux';
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'react-thunk';

import App from './App';

const store  = createStore(reducers,)

ReactDOM.render(<App />, document.getElementById('root'));