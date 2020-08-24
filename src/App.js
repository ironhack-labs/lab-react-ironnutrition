import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox'
import foods from './foods.json';
import AddFood from './components/AddFood'
import TodaysFoods from './components/TodaysFoods'
import FoodForm from './components/FoodForm'
import searchBar from './components/searchBar'

class App extends React.Component {

  constructor(props){
    super(props); // read more on this
    this.state = {
    foods: foods,
    filtered: foods,
    TodaysFoods: { }
    };

}

  handleAddfood = (event) => {
    event.preventDefault() // always do this with submit events
    let foodName = event.currentTarget.food.value
    let newfoods = [{title:foodName, completed: false}, ...this.state.foods]
    this.setState({
      foods: newfoods,
    })   
  }

  handleQuantityChange = (event) => {
    const { name, value, quantity } = event.target;
    this.setState({
      name: name,
      value: value,
      quantity: quantity
    })   
  }

  filteredFood = (e) => {
    const searchText = e.currentTarget.value 
    const filtered = this.state.foods.filter((food)=> {
      return food.name.toLowerCase().includes(searchText.toLowerCase())
  })
  this.setState({
    foods: filtered
  })
}



    render(){
    return (
      <div>
      <div className= 'IronContacts'>
      <h2>IronNutrition</h2><searchBar searchFood={this.filteredFood} />
      <FoodForm handleChange={this.filteredFood} name='search' type='text' />
      <AddFood />
      <button onAdd={() => this.handleAddfood()}>Add new food</button> 
      {foods.map((item, index) => {
        return (
      <FoodBox key={index} theFood={item} onQuantityChange={this.handleQuantityChange} /> 
      )})}
      <div className = "colum">
        <TodaysFoods />
      </div>
      </div>
     </div> 
    );
  }
}

export default App;
