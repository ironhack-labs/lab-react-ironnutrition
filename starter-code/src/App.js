import React, { Component } from 'react';
import '../node_modules/bulma/css/bulma.min.css'
import '../node_modules/bulma-helpers/css/bulma-helpers.min.css'
import './App.css';
import Header from './components/Header';
import FoodBox from './components/FoodBox';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container has-margin-top-50">
        <FoodBox/>
        </div>

      </div>
    );
  }
}

export default App;
