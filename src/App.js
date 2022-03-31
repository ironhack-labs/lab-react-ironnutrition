import React from 'react';
import './App.css';
import foods from './foods.json';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox';
import Search from './components/Search';
import Button from './components/Button';
import AddFoodForm from './components/AddFoodForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      foods: foods,
      page: 'normal',
      searchText: '',
      todaysFoods: [],
    };
  }

  showForm() {
    console.log('showing form');
    const copyState = this.state;
    copyState.page = 'form';
    this.setState({
      copyState,
    });
  }

  searchHandler = (searchText) => {
    this.setState({
      searchText: searchText,
    });
  };

  addFoodHandler = (food) => {
    const foodsCopy = [...this.state.foods]; // copy!
    foodsCopy.push(food);
    this.setState({
      foods: foodsCopy,
      page: 'normal',
    });
  };

  addToday = (props) => {
    const { name, calories } = props;
    const todaysFoodsCopy = [...this.state.todaysFoods];
    let result;
    let foodNames = [];
    todaysFoodsCopy.forEach((food) => {
      foodNames.push(food.name);
      if (food.name === name) {
        food.quantity++;
      }
    });
    if (foodNames.indexOf(name) === -1) {
      console.log('food not found');
      todaysFoodsCopy.push({
        name: name,
        calories: calories,
        quantity: 1,
      });
    }
    if (todaysFoodsCopy.length === 0) {
      result = {
        name: name,
        calories: calories,
        quantity: 1,
      };
      todaysFoodsCopy.push(result);
    }
    this.setState({
      todaysFoods: todaysFoodsCopy,
    });
  };

  render() {
    const filteredArray = this.state.foods.filter((str) => {
      return (
        str.name.toLowerCase().indexOf(this.state.searchText.toLowerCase()) >= 0
      );
    });
    const totalCalsArray = this.state.todaysFoods.map(
      (food) => food.calories * food.quantity
    );
    const totalCals = totalCalsArray.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
    switch (this.state.page) {
      case 'normal':
        return (
          <div className="container">
            <h1 className="title">IronNutrition</h1>
            <Search searchHandler={this.searchHandler} />
            <Button showTheForm={this.showForm.bind(this)} />
            <div className="columns">
              <div className="column">
                {filteredArray.map((food, index) => {
                  return (
                    <FoodBox
                      key={index}
                      name={food.name}
                      calories={food.calories}
                      image={food.image}
                      addToday={this.addToday}
                    />
                  );
                })}
              </div>
              <div className="column content">
                <h2 className="subtitle">Today's foods</h2>
                <ul>
                  {this.state.todaysFoods.map((food, index) => {
                    return (
                      <li key={index}>
                        {food.quantity} - {food.name} = {food.calories} cal
                      </li>
                    );
                  })}
                </ul>
                <strong>Total: {totalCals} cal</strong>
              </div>
            </div>
          </div>
        );
      case 'form':
        return (
          <div className="container">
            <h1 className="title">IronNutrition</h1>
            <br />
            <Search searchHandler={this.searchHandler} />
            <br />
            <br />
            <br />
            <br />
            <AddFoodForm addFoodHandler={this.addFoodHandler} />
          </div>
        );
      default:
        return <h1>FORM</h1>;
    }
  }
}

export default App;
