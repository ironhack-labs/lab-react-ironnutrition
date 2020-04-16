import React, { Component } from 'react';
import foods from './foods.json';
import FoodBoxes from './components/FoodBoxes';
import TodaysFoods from './components/TodaysFoods';
import Search from './components/Search';
import AddFoodForm from './components/AddFoodForm';

import 'bulma/css/bulma.css';

class App extends Component {
  state = {
    foods: foods.map(food => {
      return { ...food, show: true }
    }),
    showForm: false,
  };

  addFood = (food) => {
    this.setState({
      foods: [
        ...this.state.foods,
        { ...food, show: true },
      ],
    }, this.toggleAddForm());
  };

  toggleAddForm = () => {
    this.setState({
      showForm: !this.state.showForm,
    });
  };

  toggleFood = (searchResults) => {
    this.setState({
      foods: searchResults,
    });
  };

  render() {
    const { showForm, foods } = this.state;
    return (
      <section className='section'>
        <h1 className='title'>IronNutrition</h1>

        <div className='columns'>
          <div className='column is-one-fifth'>
            <button onClick={this.toggleAddForm} className='button is-info level-right'>Add Food</button>
          </div>
          <div className='column is-four-fifths'>
            {showForm && <AddFoodForm addFood={this.addFood}/>}
          </div>
        </div>

        <Search foods={foods} toggleFood={this.toggleFood}/>

        <div className='columns'>
          <div className='column'>
            <FoodBoxes foods={foods}/>
          </div>
          <div className='column'>
            <TodaysFoods />
          </div>
        </div>
      </section>
    );
  }
}

export default App;
