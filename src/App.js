import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox'
import foods from './foods.json';

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

  handleQuantityChange = () => {

  }

    render(){
    return (
      <div className= 'IronContacts'>
      <h2>IronNutrition</h2>
      <button onClick={() => this.handleAddfood()}>Add new food</button> 
      <FoodBox theFood={foods} onQuantityChange={this.handleQuantityChange} />
      </div>
    );
  }
}
export default App;
