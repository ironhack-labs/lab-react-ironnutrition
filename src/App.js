import React from 'react';
import foodList from './foods.json';
import Foodbox from './components/FoodBox/FoodBox';
import 'bulma/css/bulma.css';
import './App.css';
import Form from './components/Form/Form';
import Search from './components/Search/Search';

class App extends React.Component {
  state = {
    filteredFood: foodList,
    foods: foodList,
    showForm: false 
  }
   
  addFood = (food) => {
    const arrayCopy = [ ...this.state.foods ];
    arrayCopy.push(food);
    this.setState({ foods: arrayCopy });
  }

  displayFoods = () => {
    return this.state.filteredFood.map((singleFood) => {
      return (        
          <Foodbox {...singleFood}/>        
      )
    })
  }

  filterFoods = (event) => {
    const { value } = event.target;    
    const filteredFood = this.state.foods.filter((food) =>{
      return food.name.includes(value)
    })
    this.setState({ ...this.state, filteredFood})
  }

  //TODO:FIXME:TODO:FIXME:
  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm})    
  }

  render() {
    return (
      <div>
      <button onClick={() => this.toggleForm()}>Add food </button>
      <Search filterFoods = {(event) => this.filterFoods(event)}/>
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
