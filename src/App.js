import React from 'react';
import foodsJSON from './foods.json';
import FoodBox from './components/FoodBox';
import './App.css';
import 'bulma/css/bulma.css';

class App extends React.Component {
 state = {
   foods: foodsJSON,
 }

  render() {
  return (
    <div className="App">
      <FoodBox foods={this.state.foods} />
    </div>
  
  );}
}

export default App;
