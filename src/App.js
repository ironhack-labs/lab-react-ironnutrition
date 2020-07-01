
import React, { Component } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/Foodbox';
import 'bulma/css/bulma.css';


class App extends Component {
  state = {
    foodList: foods,
    defaultFoods: foods,
    showForm: false,
    foodName: '',
    calories: 0,
    image: '',
    todaysFoods: [],
    calTotal: 0
  };

  displayFood = () => {
    let arr = this.state.foodList.map((food) => {
      return (
        <FoodBox
          key={food.name}
          name={food.name}
          calories={food.calories}
          image={food.image}
          onClick={() => this.addToTF(food)}
        />
      );
    });
    return arr;
  };

  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm,
    });
  };

  addFood = (event) => {
    event.preventDefault();
    let newFoodObj = {
      name: this.state.foodName,
      calories: this.state.calories,
      image: this.state.image,
      quantity: 1
    };

    let foodListCopy = [...this.state.foodList];
    foodListCopy.unshift(newFoodObj);

    this.setState({
      foodList: foodListCopy,
      showForm: false,
    });
  };

  handleChange = (event) => {
    console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  search = (event) => {
    event.preventDefault();
    let searchArr = [...this.state.defaultFoods]
    let filtered = searchArr.filter(food => food.name.includes(event.target.value))
    this.setState({
      foodList: filtered
    })
  }

  displayTodaysFoods = () => {
    let tf = [...this.state.todaysFoods]
    let newtf = tf.map((food, ind) => {
      let foodStr = food.quantity + " " + food.name + " = " + food.calories + " cal"
      return (
        <li key={foodStr + ind}>{foodStr}</li>
      )
    })

    return newtf
  }

  addToTF = (food) => {
    let tf = [...this.state.todaysFoods]
    tf.push(food)
    this.setState({
      todaysFoods: tf,
      calTotal: this.state.calTotal + food.calories
    })
  }


  render() {
    return (
      <div className="App">
        <button onClick={this.toggleForm}>Add Food</button>
        {this.state.showForm ? (
          <form onSubmit={this.addFood}>
            <label>Food name:</label>
            <input onChange={this.handleChange} type="text" name="name" />
            <br />
            <label>Calories:</label>
            <input onChange={this.handleChange} type="number" name="calories" />
            <br />
            <label>Image URL:</label>
            <input onChange={this.handleChange} type="text" name="image" />
            <br />
            <input type="submit" />
          </form>
        ) : (
            ''
          )}
        <input type='text' placeholder='Search For Foods' onChange={this.search} />
        <div className="sections">
          <div>{this.displayFood()}</div>
          <div>
            <h2>Todays Foods</h2>
            <ul>{this.displayTodaysFoods()}</ul>
            <strong>{this.state.calTotal}</strong>
          </div>
        </div>
      </div>
    );
  }
}


export default App;