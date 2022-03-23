import FoodBox from './components/FoodBox/FoodBox.js';
import React from 'react';
import foods from './foods.json';
import './App.css';

class App extends React.Component {
  state = {

  };

  render(){
    return (
      <div className="App">
        <FoodBox />
      </div>
    );
  };
};

export default App;
