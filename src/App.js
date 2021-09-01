import React from 'react';
// import logo from './logo.svg';
import foods from './foods.json';

import FoodBox from './components/FoodBox/FoodBox';
import './App.css';

class App extends React.Component {
  state = {
    foods: foods,
  };
  render() {
    return (
      <div className="App container">
        {this.state.foods.map((food) => {
          return (<FoodBox {...food}/>);
        })}
      </div>
    );
  }
}

export default App;
