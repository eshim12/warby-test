import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './configureStore';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Route path="/" component={App}/>
    </Provider>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
