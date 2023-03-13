import './App.css';
import AddFoodForm from './components/AddFoodForm';
import FoodList from  './components/FoodList'
import foodsJSON from './foods.json'
import React from 'react';
import Search from 'antd/es/transfer/search';

class App extends React.Component {
  state={
    foods: foodsJSON
  }

  
  onSubmitFood = (food) => {
    const { foods } = this.state;
    const newFood = {
      ...food
    }
    console.log(newFood)
    const newFoods = [newFood, ...foods]
    console.log(newFoods)
    this.setState({ foods: newFoods })
  }

render() {

  return (
    <div className="App">

      <AddFoodForm onSubmitFood={this.onSubmitFood} />
      <Search />
      <FoodList foods={this.state.foods}/>
    </div>
  );
}
}

export default App;
