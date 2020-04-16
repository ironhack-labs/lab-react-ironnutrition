import React, { Component } from 'react';
import FoodBoxes from './components/FoodBoxes';
import AddFoodForm from './components/AddFoodForm';
import foods from './foods.json';

import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {
  state = { foods };

  addFood = (food) => {
    this.setState({
      foods: [
        ...this.state.foods,
        food,
      ],
    });
  };

  render() {
    return (
      <section className='section'>
        <div className='container'>
          <header>
            <h1 className='title'>IronNutrition</h1>
          </header>
          <main>
            <div className='content'>
              <AddFoodForm addFood={this.addFood}/>
            </div>
            <div className='columns'>
              <FoodBoxes foods={this.state.foods}/>
              <div className='column'>
                <h3 className='subtitle is-3'>Today's foods</h3>
              </div>
            </div>
          </main>
        </div>
      </section>
    );
  }
}

export default App;
