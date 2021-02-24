import React from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import Form from './components/Form';
import Search from './components/Search';
import TodayFoods from './components/TodayFoods';
import './App.css';

class App extends React.Component {
  state = {
    showForm: false,
    food: foods,
    totalFoods: [],
    totalCalories: 0,
    allCalories: 0
  }

  toggleForm = () => {
    this.setState({showForm: !this.state.showForm})
  }

  addFood = (newFood) => {
    const updatedFood = [newFood, ...this.state.food]
    this.setState({food: updatedFood, showForm: !this.state.showForm})
  }

  displayFood = (search) => {
    const matchingFood = [];
    this.state.food.forEach(function(element) {
      if (element.name.includes(search)) {
        matchingFood.push(element)
      }
    })
    this.setState({food: matchingFood})
  }

  createTotal = (newFood) => {
    let newTotalFoods = [...this.state.totalFoods];

    if (newTotalFoods.length>0){
    newTotalFoods.forEach((element) => {
      if(newFood.name === element.name){
        element.quantity = Number(element.quantity) + Number(newFood.quantity)
      } else {
        newTotalFoods.push(newFood);
      }
    })}
    else {newTotalFoods.push(newFood)}

    console.log(newTotalFoods);

    let newTotalCalories = this.state.totalCalories;
    let totalAllCalories = 0; 
    for ( let i = 0; i < newTotalFoods.length; i++)
    {
    newTotalCalories = newTotalFoods[i].calories*newTotalFoods[i].quantity
    totalAllCalories += newTotalCalories
  }

    this.setState({totalFoods: newTotalFoods, totalCalories: newTotalCalories, allCalories: totalAllCalories});
  }

  /*totalCalories = (arr) => {
    const newTotalCalories= this.state.totalCalories;

    for ( let i =0; i<arr.length; i++){
      newTotalCalories += arr[i].calories ;
    }
    this.setState({totalCalories: newTotalCalories})
  }*/
  
  render() {
    return (
      <div className="App">
        <button onClick={this.toggleForm}>Add new food</button>
        <Search search={this.displayFood} />

        <div>
          <h2>Today food's</h2>
          {this.state.totalFoods.map((element, i) => {
            return (
              <div key={i + element.name} className="box">
                <TodayFoods foodList={element} />
                {console.log(this.state.totalFoods)}
              </div>
            )})
          }
          <p>Total Calories: {this.state.allCalories}</p>
        </div>

        {this.state.showForm && <Form addFood={this.addFood} />}
        {this.state.food.map((element, i) => {
          return(
          <div key={i + element.name} className="box">
           <FoodBox food={element} createTotal={this.createTotal}  />
           </div>
          )
          }
        )}

      </div>
    );
  }
}

export default App;
