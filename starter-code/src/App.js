import React, { Component } from 'react';
import foods from './foods.json';
import FoodBoxes from './components/FoodBoxes';
import TodaysFoods from './components/TodaysFoods';
import Search from './components/Search';
import AddFoodForm from './components/AddFoodForm';

import 'bulma/css/bulma.css';

class App extends Component {
  state = {
    foods,
    showForm: false,
  };

  addFood = (food) => {
    this.setState({
      foods: [
        ...this.state.foods,
        food,
      ],
    }, this.toggleAddForm());
  };

  toggleAddForm = () => {
    this.setState({
      showForm: !this.state.showForm,
    });
  };

  render() {
    const { showForm } = this.state;
    return (
      <section className='section'>
        <h1 className='title'>IronNutrition</h1>

        <Search />

        <div className='content'>
          <button onClick={this.toggleAddForm} className='button is-info'>Add Food</button>
          {showForm && <AddFoodForm addFood={this.addFood}/>}
        </div>

        <div className='columns'>
          <FoodBoxes foods={this.state.foods}/>
          <TodaysFoods />
        </div>
      </section>
    );
  }
}

export default App;
