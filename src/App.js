import React, { Component } from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import Display from './components/display';
import Post from './components/post';
import {Provider} from 'react-redux';
import {store} from './redux/store/store'

import './App.css';

class App extends Component {
  render() {
    return (
   <Provider store={store}>
    <BrowserRouter>
      <div className="container">
        <Route exact path="/" component={Post} />
        <Route exact path="/display" component={Display} />
      </div>
      </BrowserRouter>
      </Provider> 
    );
  }
}

export default App;