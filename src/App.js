import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox/FoodBox';

class App extends React.Component {

  render() {

    return (
      <div>
        <h1>IronNutrition</h1>
        <div>
          {foods.map((food) => {
            return (<FoodBox food={food} />)
          })}
        </div>
      </div>
    );
  }
}

export default App;
