import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox'
import Form from './components/FormAddFood'
import SearchBar from './components/SearchBar'
import Menu from './components/TodayFoods'

class App extends Component {
  
  constructor() {

    super()

    this.state = {
        myFoods: foods,
        foods: foods,
        formDisplayed: false,
        todaysList: [],
        superTotal: 0
      }

}

displayForm = () =>{
this.setState({formDisplayed: !this.state.formDisplayed})
} 

addFoodHandler = food =>{
  const foodCopy = [...this.state.myFoods]
  foodCopy.push(food)
  this.setState({
    myFoods: foodCopy
    
  })
}


filterFoodsFunct = (search) => {
  let casa = this.state.foods.filter(food => {
     return food.name.toLowerCase().includes(search.toLowerCase())
  })
  this.setState({myFoods: casa})
  console.log(casa)
}



addToMenuFunct = (arg) => {
  console.log(this.state.myFoods)
  let casa = [...this.state.todaysList]
  let quantityCal = this.state.myFoods[arg].calories * document.querySelectorAll(".quantityInput")[arg].value
  casa.push(`You want ${document.querySelectorAll(".quantityInput")[arg].value} ${this.state.myFoods[arg].name} of ${quantityCal} calories!`)
  let superTotalCopy = this.state.superTotal
  superTotalCopy += quantityCal
  this.setState({todaysList: casa, superTotal :superTotalCopy})
}


    render() {

        return (
      <div className="App">
      <h1>IronNutrition</h1>
      <SearchBar filterFoods={this.filterFoodsFunct} />
      <button onClick={this.displayForm}>Add new food</button>
<Menu menuList={this.state.todaysList}/>
<p>{this.state.superTotal}</p>
{this.state.formDisplayed ? (<Form addNewFood={this.addFoodHandler}/>) : null}

         {
           this.state.myFoods.map((food, idx) => <FoodBox {...food} addToMenu={() => this.addToMenuFunct(idx)} key={idx}/>)
         }
      </div>
    );
  }
}

export default App;
