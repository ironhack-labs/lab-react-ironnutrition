import React, { Component } from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import AddFood from './components/AddFood';

class App extends Component {
  state = {foods:foods,
          formOn:false};
  
  addFood = this.addFood.bind(this);

  addFood (food) {
    const foodsCopy = [...foods];
    foodsCopy.unshift(food);
    this.setState({foods:foodsCopy});
  }

  showForm = () => {
    this.setState({formOn:!this.state.formOn});
    console.log(this.state.formOn);
  }

  render() {
    return (
      <div className="App">
      <button onClick={this.showForm}>Add New Food</button>
      
      
        {
         this.state.foods.map((food,index) => {
           return (
           <FoodBox {...food} key={index} />
           )
         })
        }
        
      </div>
    );
  }
}

export default App;
