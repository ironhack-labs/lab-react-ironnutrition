import React from 'react';
import foodList from './foods.json';
import Foodbox from './components/FoodBox/FoodBox';
import 'bulma/css/bulma.css';
import './App.css';
import Form from './components/Form/Form';

class App extends React.Component {
  state = {
    foods: foodList,
    showForm: false 
  }
   
  addFood = (food) => {
    const arrayCopy = [ ...this.state.foods ];
    arrayCopy.push(food);
    this.setState({ foods: arrayCopy });
  }

  displayFoods = () => {
    return this.state.foods.map((singleFood) => {
      return (        
          <Foodbox {...singleFood}/>        
      )
    })
  }

  //TODO:FIXME:TODO:FIXME:
  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm})    
  }

  render() {
    return (
      <div>
      <button onClick={() => this.toggleForm()}>HABER </button>
     
      {this.state.showForm ? <Form patata={()=> this.toggleForm()} addFood={(food) => this.addFood(food)} /> : ""}      
      
      
          <div>
          {
          this.displayFoods()
          }
          </div>
      </div>
    )
  }
}

export default App;
