import React, {Component} from 'react';
import foodList from './foods.json';
import './App.css';
import 'bulma/css/bulma.css';

import FoodForm from './components/FoodForm';
import FoodBox from './components/FoodBox'
import FoodSearch from './components/FoodSearch'



class App extends Component {
  state = {
    foodState: foodList,
    filteredFoodListState: [],
    searching: false,
    form: false,
    todaysFood: []
  }

  handleRenderForm = () => {
    const stateCopy = {...this.state};
    stateCopy.form = !this.state.form;
    this.setState(stateCopy)
  }

  handleAddNewFood = (newFoodItem) => {
    const stateCopy = {...this.state};
    stateCopy.foodState = [...stateCopy.foodState, newFoodItem];
    stateCopy.form = !stateCopy.form;
    this.setState(stateCopy)
  }

  handleFilterFoods = (searchInput) => {
    const stateCopy = {...this.state};
    const filteredFoodList = stateCopy.foodState.filter((foodItem) =>
    foodItem.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    stateCopy.filteredFoodListState = filteredFoodList;
    stateCopy.searching = true;

    this.setState(stateCopy);
  }

  handleAddTodayFood = (incomingFood) => {
    const stateCopy = {...this.state};
    stateCopy.todaysFood = [...stateCopy.todaysFood, incomingFood];
    this.setState(stateCopy);
  };


  render(){
    return (
      <div>
      <h1>IronNutrition</h1>
      <section>
        <FoodSearch handleFilterSearch={this.handleFilterFoods} />
      </section>
        <section>
          <button onClick={this.handleRenderForm}>Add New Food</button>
          {this.state.form && (
          <FoodForm handleLiftFoodFormState={this.handleAddNewFood} />
        )}
        </section>
        <section className="App">
            <div className="columns">
              <div className="column">
                {this.state.searching
                  ? this.state.filteredFoodListState.map((foodItem, index) => (
                      <FoodBox key={index} {...foodItem} />
                    ))
                  : this.state.foodState.map((foodItem, index) => (
                      <FoodBox key={index} {...foodItem} />
                    ))}
              </div>
              <div className="column">
                <h3>Today's Foods</h3>
                <p>{this.state.todaysFood}</p>
              </div>
            </div>
        </section>
      </div>
    )
  }
  }


export default App;
