import React, { Component } from 'react'
import foods from '../foods.json'
import FoodBox from './FoodBox'
import AddFood from './AddFood'
import SearchBar from './SearchBar'
import ListElement from "./TodayFoods"


class FoodList extends Component {
  constructor(){
    super() 
    this.state = {
     foods:foods,
     appear: false,
     todaysFoods:[]
     

    }
  }
  filteredListHandler = (filteredList) =>{
    console.log(filteredList)
    let foodCopy = [...this.state.foods]
    foodCopy = filteredList
    this.setState({
      foods: foodCopy
    })
  }

  addFoodHandler = (food) =>{
    const foodCopy = [...this.state.foods]
    foodCopy.push(food)
    this.setState({
      foods: foodCopy
    })
  }

  formAppear =() =>{
    this.setState({appear:!this.state.appear})
  }
  addTodayFood = (key) => {
    let todaysFoods = [...this.state.todaysFoods]
    todaysFoods.push(this.state.fullFoodList[key])
    this.setState({ todaysFoods })
 
  }

  render() {
    return (

    
    <div> 
      <div className={this.state.appear ? "" :"hide"}>
        <AddFood addFood={this.addFoodHandler}/>
      </div>
    <button onClick={()=>this.formAppear()}>Add New Food</button>

    <SearchBar items={this.state.foods} filterFood={this.filteredListHandler}/>
    {this.state.foods.map((oneFood, index) =>  <FoodBox key={index} {...oneFood}/>)}
      <h2>Listica</h2>
    <ul>
        <ListElement foods={this.state.todaysFoods} />
    </ul>
    </div>
    ) 
  }

}

export default FoodList