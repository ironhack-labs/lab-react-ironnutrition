import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import './App.css';
import FoodBox from './components/FoodBox';
import FormFood from './components/FormFood';
import SearchBar from './components/SearchBar';
import TodayFood from './components/TodayFood';

class App extends Component {

  state = {
    foods: foods,
    displayForm: false,
    todayList: [],
    totalCal: 0
  }

  addFood = newFood => {
    const copy = [...this.state.foods];
    copy.push(newFood);
    this.setState({ foods: copy, displayForm: false });
  }

  displayAddForm = () => {
    this.setState({displayForm: !this.state.displayForm})
  }

  filteredFood = (searchValue) => {
    this.setState({foods: (searchValue.length) ? foods.filter(food => food.name.toLowerCase().includes(searchValue.toLowerCase())) : foods})
  }

  addToTodayFood = (objectFromFoodBox) => {
    const copy = [...this.state.todayList];
    copy.push(objectFromFoodBox);

    const totalCal = copy.map(item => item.calories * item.quantity).reduce((prev, next) => prev + next);
    this.setState({todayList: copy, totalCal: totalCal});
  }

  render() {
    let form = (this.state.displayForm) ? <FormFood clbk={this.addFood}/> : null;

    return (
      <div className="App">
        <h1>IronNutrition</h1>
        <button className="add-food" onClick={this.displayAddForm}>Add new food</button>
        {form}
        <SearchBar filterProducts={this.filteredFood}/>
        <section className="columns">
          <div className="column">
            {
              this.state.foods.map((food, i) => <FoodBox key={i} name={food.name} calories={food.calories} image={food.image} quantity={food.quantity} clbk={this.addToTodayFood}/>)
            }
          </div>
          <div className="column">
              <TodayFood foodList={this.state.todayList} totalCal={this.state.totalCal}/>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
