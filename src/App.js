import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox'
import foods from './foods.json';
import AddFood from './components/AddFood'
import FoodForm from './components/FoodForm'

// import DisplayFood from './components/DisplayFood'

class App extends React.Component {

  constructor(props){
    super(props); // read more on this
    this.state = {
    foods: foods,

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

    render(){
    return (
      <div className= 'IronContacts'>
      <h2>IronNutrition</h2>
      <button onClick={() => this.handleAddfood()}>Add new food</button> 
      {foods.map((item, index) => {
        return (
      <FoodBox key={index} theFood={item} onQuantityChange={this.handleQuantityChange} /> 
      )})}
     
      </div>
    );
  }
}

export default App;
