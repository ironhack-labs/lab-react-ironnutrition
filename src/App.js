import React, {Component} from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodList from './components/FoodList'
import AddFood from './components/AddFood';



export default class App extends Component {
  
  state={
    foodList: foods,
    filteredList: foods,
    showForm: false,
    showPage: false,
  };

  handleAdd = (event) => {
    event.preventDefault();
    const {foodList, filteredList} = this.state
    let newName = event.target.foodName.value; 
    let newCalories = event.target.foodCalories.value
    let newImage = event.target.foodImage.value
    
    let newDish = {
      name: newName,
      calories: newCalories,
      image: newImage,
      quantity: 1

    };
    this.setState({
      foodList: [newDish, ...foodList],
      filteredList: [newDish, ...filteredList],
      showForm: false,
    })
    }
  
handleFormShow = () => {
  this.setState({
    showForm: true
  })
}

handleSearch =(event) => {
  let searchText =event.target.value
  const {foodList} = this.state

  let filteredList = foodList.filter((food) => {
    return food.name.toLowerCase().includes(searchText.toLowerCase())
  })
  this.setState({
    filteredList: filteredList,
  })
}
  
//handleAddToday =() => {
//  
//}
  
render() {
    const {foodList, filteredList,  showForm} = this.state

    return (
      <div>
      <div className="top">
      <h1>Iron Nutrition</h1>
        {
         showForm ? (<AddFood onAdd={this.handleAdd} />) : (<button onClick={this.handleFormShow}>Show Form</button>)
        }
        
        <input onChange={this.handleSearch} type="text" placeholder="search for a food"></input>
      </div>
        
        <div className="columns">
        <div className="colummn">
        <FoodList food={filteredList} 
          onAddToday = {this.handleAddToday}
        />

        </div>
        <div class="column">
        <h1>Today's Foods</h1>

        </div>
        </div>

       
      </div>
    )
  }
}
