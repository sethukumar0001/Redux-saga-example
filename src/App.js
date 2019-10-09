import React, { Component } from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import Display from './components/display';
import Posts from './containers/posts';
import {Provider} from 'react-redux';
import {store} from './redux/store/store'

import './App.css';

class App extends Component {
  render() {
    return (
   <Provider store={store}>
    <BrowserRouter>
      <div className="container">
          <Posts />
          <Display />
      </div>
      </BrowserRouter>
      </Provider> 
    );
  }
}

export default App;