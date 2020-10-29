import React from 'react';
//import logo from '.logo.svg';
import FoodBox from './components/FoodBox'
import AddFood from './components/AddFood'
import foods from './foods.json';
import FoodList from './components/FoodList';
import './App.css';
import 'bulma/css/bulma.css';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      foods: foods,
      filteredFoods: foods,
      formShow: false,
      todayFoods: []
    }
  }
  

  handleAdd = (event) => {
    event.preventDefault()
    let foodName = event.currentTarget.foodName.value
    let foodCalories  = event.currentTarget.foodCalories.value
    let foodImage = event.currentTarget.foodImage.value

    let newFood = [
      {
        name: foodName,
        calories: foodCalories,
        image: foodImage,
      }, ...this.state.foods]

    this.setState({
      foods: newFood,
      formShow: false
    })
  }

  handleShowForm = () => {
    this.setState({
      formShow: true
    })
  }

  handleSearch = (event) => {
    let searchName = event.currentTarget.value
    let cloneFoods = this.state.foods.filter((item) => {
      return item.name.startsWith(searchName)
    })

    this.setState({
      filteredFoods: cloneFoods
    })
  }

  //ITERATION 5

  handleToday = (event) =>{
    let foodName = event.currentTarget.food.name.value
    let foodCalories = event.currentTarget.food.calories.value
    let foodQuantity = event.currentTarget.food.quantity.value


    let newFood = [
        {

        name:      foodName, 
        calories:   foodCalories,
        quantity:   foodQuantity 

        }, ...this.state.TodayFoods]

    this.setState({
      TodayFoods: newFood
    })
}

  render(){
    return (
      <div>
 
          {
           this.state.formShow ? <AddFood onAdd={this.handleAdd}/> : <button onClick ={this.handleShowForm}>Add Food</button>
          }

          <input 
            type="text" 
            onChange={this.handleSearch}
            placeholder="Search">
          </input>

         
        
        {
          this.state.foods.map((food, index) =>{
            return(
            <FoodBox  
            food={food} 
            />) 
          })
          
        }  

        <div>
          <h4>Today's Food</h4>
          <ul>
            {
              this.state.todayFoods.map((todayFood, i) => {
                return <FoodList 
                todayFood={todayFood} 
                key={'todayfood' + i}
                id={i}
                />
            })
          }
          </ul>          
        </div>        
        
      </div>
    )
  }
}


export default App;