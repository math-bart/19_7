import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { addComment } from './actions';
import { createStore } from 'redux';
import reducer from './reducer.js';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(addComment('drugi komentarz'));
store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('trzeci komentarz'));
store.dispatch(addComment('czwarty komentarz'));


//registerServiceWorker();
