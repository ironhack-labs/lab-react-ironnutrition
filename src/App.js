import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import "./App.css"
import foods from './foods.json';
import FoodBox from './foodbox/FoodBox';
import FoodList from './foodlist/FoodList';

class App extends Component {
  state = {
    foodArr: foods,
    displayFoodArr: foods,
    showForm: false,
    onListArr: []
  };

  allFoods = () => {
    return this.state.displayFoodArr.map((item, index) => {
      return <FoodBox key={index} food={item} handleChangeQuant={this.handleChangeQuant} addToList={this.addToList}/>;
    });
  };

  addToList = (e) => {
    let foodArrCopy = this.state.foodArr.map(e => {return {...e}});
    let foodItem = foodArrCopy.find(f => f.name === e.target.name)
    
    let onListArrCopy = [...this.state.onListArr]
    onListArrCopy.push(foodItem)
    
    this.setState({
      onListArr: onListArrCopy
    })
    // ASK ABOUT THIS!
    // return (
    //   <li>{foodItem.quantity} {foodItem.name} = {foodItem.calories * foodItem.quantity} cal</li>
    // )
  }

  calculateTotal = () => {
    let onListArrCopy = [...this.state.onListArr]
    return onListArrCopy.reduce((acc,val) => {
      return acc + (val.calories * val.quantity)
    },0)
  }

  printList = () => {
    return this.state.onListArr.map((item,index) => {
      return <li key={index}>{item.quantity} {item.name} = {item.calories * item.quantity} cal</li>
    })
  }

  handleChangeQuant = (event) => {
    let foodArrCopy = this.state.foodArr.map(e => {return {...e}});
    let index = foodArrCopy.findIndex(food => food.name === event.target.name)

    let displayFoodArrCopy = this.state.displayFoodArr.map(e => {return {...e}});
    let indexD = displayFoodArrCopy.findIndex(food => food.name === event.target.name)

    foodArrCopy[index].quantity = event.target.value
    displayFoodArrCopy[indexD].quantity = event.target.value

    this.setState({
      displayFoodArr: displayFoodArrCopy,
      foodArr: foodArrCopy
    })
  }

  handleSubmit = (e) => {
    //adds new food to foodArr
    e.preventDefault();
    this.toggleForm();
    let newFood = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
      quantity: 0
    };
    let newArr = [...this.state.foodArr];
    newArr.push(newFood);
    this.setState({
      foodArr: newArr,
      displayFoodArr: newArr
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm,
    });
  };

  searchChange = (e) => {
    let query = e.target.value
    let newArr = []
    if (query.length === 0)
      newArr = [...this.state.foodArr]
    else {
      newArr = [...this.state.foodArr].filter(f => {
        return f.name.toLowerCase().includes(query.toLowerCase())
      })
    }
    this.setState({
      displayFoodArr: newArr
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleForm}>Add Food</button>

        {this.state.showForm ? (
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input onChange={this.handleChange} type="text" name="name"></input>
            <label htmlFor="calories">Calories: </label>
            <input
              onChange={this.handleChange}
              type="number"
              name="calories"
            ></input>
            <label htmlFor="image">Image Link: </label>
            <input
              onChange={this.handleChange}
              type="text"
              name="image"
            ></input>
            <button type="submit">Submit</button>
          </form>
        ) : null}

        <input 
          className="search-bar"
          onChange={this.searchChange}
          type="text"
          name="search-bar" 
          placeholder="search"
          style={{width: "100%"}}>
        </input>
        <div className="split">
          <div> 
            {this.allFoods()}
          </div>
          <FoodList total={this.calculateTotal()}>
            {this.printList()}
          </FoodList>
        </div>
      </div>
    );
  }
}

export default App;
