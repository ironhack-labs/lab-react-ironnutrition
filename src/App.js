import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import FoodBox from './components/foodbox/FoodBox'
import foodsDB from './foods.json';
import AddNew from './components/addNew/AddNew';
import List from './components/List/List'



class App extends React.Component {

  
  state = {
    foods: foodsDB,
    foodsAddedToList: [],
    input: "",
    totalCalories: 0
  }
  
  filterFood(event){

    const arrayCopy = [ ...this.state.foods ]
    const { name, value } = event.target;

    console.log(value)
    console.log(typeof value)
    console.log(value.length)

    this.setState({
        input: value,
    });
    

    if(value){
    this.setState({
      foods: arrayCopy.filter((food3) =>
      food3.name.includes(value)
  )
    })
  }else if(value.length === 0){this.setState({foods:foodsDB})}
  }

  addFoodtoList(id){
    console.log(id)
     const arrayCopy = [...this.state.foodsAddedToList]
     arrayCopy.push(this.state.foods[id])
     console.log(arrayCopy)
     this.setState({foodsAddedToList: arrayCopy})
     this.setState({totalCalories: this.state.totalCalories + this.state.foods[id].calories})
    

  }

  addFood = (food) => {
    const arrayCopy = [ ...this.state.foods ]
    arrayCopy.push(food);
    
    this.setState({ foods: arrayCopy })
  }

  render(){
  return (
    <div className="App">
   <input onChange={(e)=> this.filterFood(e)}  placeholder="Name.." type="text" name="input" value={this.state.input} />
    
    
    <AddNew addFood={(food) => this.addFood(food)} />
    
    {this.state.foods.map((food, index) => {
      return (
       <FoodBox addFoodtoList={() => this.addFoodtoList(index)}  id={index} {...food}></FoodBox>
      )
    })}

    <div>
    {this.state.foodsAddedToList.map((foodsAdded) =>{

        return(<List {...foodsAdded}></List>)
    })}
      
    </div>
    {this.state.totalCalories}
   

    </div>
  )}
}

export default App;
