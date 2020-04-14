import React, { Component } from 'react';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <header>
          <h1 className='title'>IronNutrition</h1>
        </header>
        <main>
          <div className='columns'>
            <FoodBoxes />
            <div className='column'>
              <h3 class='subtitle is-3'>Today's foods</h3>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

const FoodBoxes = () => {
  return (
    <div className='column'>
      {foods.map(food => {
        const { name, calories, image, quantity } = food;
        return <FoodBox
          name={name}
          calories={calories}
          image={image}
          quantity={quantity}
          />
      })}
  </div>
  );
}

export default App;
