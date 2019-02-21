import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import Search from './components/Search';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      foods: foods,
      search:'',
      calories: 0,
      foodList:[]
    };

  }
  
  handleFoodTrash(idx) {
    console.log(idx);
    console.log(this.state.foodList[idx]);
    console.log('foodTrash called!');
    let currArr = this.state.foodList;
    let cals = currArr[idx].calories;
    currArr.splice(idx,1);
      // console.log(this.state.foodList);
    this.setState({
      foodList: currArr,
      calories: this.state.calories - cals
    })
  }

  handleSearchChange = (value) =>{
    this.setState({search: value});
  }
  handleFoodBoxSubmit = (foodObj) =>{
    let hasFood = this.state.foodList.filter(food => food.name === foodObj.name);
    // console.log('hasFood',hasFood);
    if(hasFood.length < 1){
      this.setState(prevState => {
        return {foodList: prevState.foodList.concat(foodObj)}
      });
      this.setState(prevState => {
        return {calories: prevState.calories + foodObj.calories}
      })
    } else {
      this.state.foodList
        .filter(food => food.name === foodObj.name)
        .forEach((food,idx) => {
          let currentFoodList = this.state.foodList;
          let foodCalories = currentFoodList[idx].calories;

          currentFoodList[idx].quantity = foodObj.quantity;
          currentFoodList[idx].calories = foodObj.calories;
          
          let changedFoodList = currentFoodList;

          this.setState(prevState =>{
            return {
              foodList: changedFoodList,
              calories: (prevState.calories - foodCalories) + foodObj.calories
            }
          })
      })
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container">
        <h1 className="title">IronNutrition</h1>
          <Search inputChange={this.handleSearchChange} inputValue={this.state.search}/>
          <div className="columns">
            <div className="column">
            {
              this.state.foods.map((food,idx) => {
                // console.log(this.state.search);
                let str = this.state.search;
                let reg = new RegExp('^'+str, 'i');
                  if(this.state.search.length > 0 && reg.test(food.name) ){
                    return <FoodBox name={food.name} image={food.image} calories={food.calories} key={idx} inputSubmit={this.handleFoodBoxSubmit}/>
                  }
              })
            }
            </div>
            <div className="column content">
              <h2 className="subtitle">Today's foods</h2>
              <ul>
                {
                  this.state.foodList.map((food,idx) => {
                    return <li key={idx}>
                    {`${food.quantity} ${food.name} = ${food.calories}`}
                      <i className="far fa-trash-alt trash" onClick={(e) => {this.handleFoodTrash(idx)}}></i>
                     </li>
                  })
                }
              </ul>
              <strong>Total: {this.state.calories} cal</strong>
            </div>
          </div>
          
        </div>
      
      </div>
    );
  }
}

export default App;
