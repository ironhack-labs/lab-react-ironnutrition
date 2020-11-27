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

    incomingFood.calories *= incomingFood.quantity;
    stateCopy.todaysFood.push(incomingFood)
    this.setState(stateCopy);
  };

  handleCalculateTotalCal = () => this.state.todaysFood.reduce((acc, val) => acc + val.calories, 0)


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
                      <FoodBox key={index} {...foodItem} handleAddFood={this.handleAddTodayFood}/>
                    ))
                  : this.state.foodState.map((foodItem, index) => (
                      <FoodBox key={index} {...foodItem} 
                        handleAddFood={this.handleAddTodayFood}
                      />
                    ))}
              </div>
              <div className="column">
                <h3>Today's Foods</h3>
                    <ul>
                      {this.state.todaysFood.map((element, index) => (
                        <li key={index}>{element.quantity} {element.name} = {element.calories} cal</li>
                      ) )}
                    </ul>
                    <p>Total: {this.handleCalculateTotalCal()}</p>
              </div>
            </div>
        </section>
      </div>
    )
  }
  }


export default App;
