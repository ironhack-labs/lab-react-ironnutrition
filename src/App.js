import './App.css';
import AddFoodForm from './components/AddFoodForm';
import FoodList from  './components/FoodList'
import foodsJSON from './foods.json'
import React from 'react';

class App extends React.Component {
  state={
    foods: foodsJSON
  }

  
  onSubmitFood = (food) => {
    const { foods } = this.state;
    const newFood = {
      ...food
    }

    const newFoods = [newFood, ...foods]

    this.setState({ foods: newFoods })
  }

render() {

  return (
    <div className="App">

      <AddFoodForm onSubmitFood={this.onSubmitFood} />
      <FoodList foods={this.state.foods}/>
    </div>
  );
}
}

export default App;
