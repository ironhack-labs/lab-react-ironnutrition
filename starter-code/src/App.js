import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import Foods from './datasets/foods.json';
import Header from './components/misc/header';
import FoodBox from './components/FoodBox';

class App extends Component {
  render() {

    const FoodList = Foods.map((food,index) => {
      return <FoodBox key={index} {...food} />;
    })

    return (
      <div className="App">
        <Header />
        {FoodList}
      </div>
    );
  }
}

export default App;
