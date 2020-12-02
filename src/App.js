import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import Foodbox from './components/Foodbox.js';
import AddFoodForm from './components/AddFoodForm.js';


class App extends React.Component {
  state = {
    food: foods,
    showForm: false
  }

  showFoodForm = () => {
    this.setState({ showForm: !this.state.showForm})
  }

  addNewFood = (foodObj) => {
    const updatedFoods = [...this.state.food, foodObj];
    this.setState({food: updatedFoods});
    this.showFoodForm();
  }

  render () {
    return (
      <div className="App">
       {this.state.food.map((foodObj) => {
         return (
          <Foodbox key={foodObj.name} food={foodObj}/>
         )
       })}

       <button onClick={this.showFoodForm} type="submit">Add New Food</button>

       {this.state.showForm 
       ? <AddFoodForm addNewFood={this.addNewFood}/>
       : null }
        
      </div>
    );
  }
}
export default App;