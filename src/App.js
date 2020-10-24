import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/foodbox/FoodBox';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
import TodayFood from './components/todayfood/TodayFood';

export default class App extends Component {
  state = {
    foods: foods,
    name: '',
    calories: 0,
    image: '',
    showForm: false,
    inputValue: '',
    quantity: 0,
    todayFood: []
  };

  showForm = (e) => {
    console.log(e);
    this.setState({
      showForm: true,
    });
  };

  addData = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  submitForm = (e) => {
    e.preventDefault();
    let newFood = {
      name: this.state.name,
      image: this.state.image,
      calories: this.state.calories,
      quantity: this.state.quantity,
    };
    this.setState({
       foods: [...this.state.foods, newFood],
     // foods: this.state.foods.concat([newFood]),
      showForm: false,
    });
  };

  searchFood = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
    console.log(e.target.value);
  };

  addHandler(item) {
    console.log(item)

    this.setState({
      todayFood: [...this.state.todayFood, item]
      //todayFood: this.state.todayFood.concat([item])
    })
    console.log(this.state.todayFood)
  } 

  allCalories() {
    const totalCal = this.state.todayFood.calories.reduce((first, second) => {
      return first + second
    }, 0) 
    console.log(totalCal)
  }


  render() {
    let search = this.state.foods.filter((food) => {
      return (
        food.name.toLowerCase().indexOf(this.state.inputValue.toLowerCase()) !==
        -1
      );
    });
    console.log(this.state.todayFood)
    return (
      <div className="App">
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.searchFood.bind(this)}
        />
        <div className="flex">
          <div>
            {search.map((item) => (
              <FoodBox key={item.name} item={item} onAdd={(item) => this.addHandler(item)}/>
            ))}
          </div>
          <div>
          <h4>Today's foods</h4>
          {this.state.todayFood.map(item => 
                <TodayFood key={item.name} item={item} />
             )}
             <p>Total: {this.state.todayFood.reduce((first, second) => {
                 return first + (second.calories * second.quantity)
                  }, 0)} cal</p> 
          </div>
        </div>
        <button onClick={this.showForm}>Show a form</button>
        {this.state.showForm ? (
          <div>
            <form onSubmit={this.submitForm}>
              <label htmlFor="name">Food name</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.addData}
              />
              <label htmlFor="image">Image</label>
              <input
                type="text"
                name="image"
                value={this.state.image}
                onChange={this.addData}
              />
              <label htmlFor="cal">Calories</label>
              <input
                type="text"
                name="calories"
                value={this.state.calories}
                onChange={this.addData}
              />
              <button type="submit">Add new food</button>
            </form>
          </div>
        ) : null}
      </div>
    );
  }
}

/* name={item.name}
              calories={item.calories}
              image={item.image}
              quantity={item.quantity} */

/*               {this.state.todayFood.map(item => 
                <TodayFood key={item.name} item={item} />
             )} */

  /*            () => this.allCalories() */