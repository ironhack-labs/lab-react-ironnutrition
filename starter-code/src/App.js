import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import Foodbox from "./Foodbox";

class App extends Component {
  state = {
    foods: foods,
    filteredFoods: foods,
    name: '',
    calories: '',
    image: '',
    quantity: '',
    foodList: {
    }
  };

  showAllTheFoods = () => {
    return this.state.filteredFoods.map(eachFood => {
      return <Foodbox addToAppList={this.addToAppList} foodProp={eachFood} />;
    });
  };


    searchFoods = (e) => {
    console.log(e.target.value) 
    let filteredFoods = this.state.foods.filter((foods)=>{
      return foods.name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    this.setState({
      filteredFoods: filteredFoods
    })
  } 

  addToAppList = (food) => {
    console.log(food)
    let foodListCopy = {...this.state.foodList}
    foodListCopy[food.name] = food
    this.setState({
      foodList:foodListCopy
    })
  }


  addAFood = e => {
    e.preventDefault();
    console.log("adding a food item")

    let foods = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
      quantity: this.state.quantity
    };

    let newFoods = [...this.state.filteredFoods];
    newFoods.push(foods);
    this.setState({
      filteredFoods: newFoods,
      name: '',
      calories: '',
      image: '',
      quantity: ''
    });
  };
  setFood = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log("the state when adding food ------ ", this.state)
  };

  showList = () => {
    let TOTAL = 0;
    let foodList = {...this.state.foodList}
    var list = Object.keys(foodList).map(function(key) {
      TOTAL += foodList[key].totalCalories
      return <ul value={key}>
                <li>{foodList[key].name}</li>
                <li>{foodList[key].totalCalories}</li>
                <li>{foodList[key].quantity}</li>
             </ul>
    });


    return list
  }

  makeTotal = () => {
    let total = 0
    let foodList = { ...this.state.foodList }
    for(let key in foodList){
      total +=  Number(foodList[key].totalCalories  )
    }
    console.log('total', total)
    // this.setState({
    //   total
    // })
    return <b>{total}</b>
  }
  render() {
    // let foods = this.state.foods;
  
    return (
      <div className="App">
        {this.showList()}
        {this.makeTotal()}

        <input id = "searchInput" input name="foods" onChange={(e)=>this.searchFoods(e)} type="text"></input>
        {this.showAllTheFoods()}

          <form onSubmit={this.addAFood}>
            <input
              name="name"
              type="text"
              placeholder="name"
              value={this.state.name}
              onChange={this.setFood}
            />
            <input
              name="calories"
              type="text"
              placeholder="calories"
              value={this.state.calories}
              onChange={this.setFood}
            />
            <input
              name="image"
              type="text"
              placeholder="image"
              value={this.state.image}
              onChange={this.setFood}
            />
            <input
              name="quantity"
              type="number"
              placeholder="quantity"
              value={this.state.quantity}
              onChange={this.setFood}
            />
            <button>Add Food</button>
          </form>
      </div>
    );
  }
}

export default App;
