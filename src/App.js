import './App.css';
import AddFoodForm from './components/AddFoodForm';
import FoodList from  './components/FoodList'
import foodsJSON from './foods.json'
import React from 'react';
import Search from './components/Search';


class App extends React.Component {
  state={
    foods: foodsJSON,
    searchResults: ''
  }

  
  onSubmitFood = (food) => {
    const { foods } = this.state;
    const newFood = {
      ...food
    }

    const newFoods = [newFood, ...foods]
    this.setState({ foods: newFoods })
  }

  onChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value }, () => {
      this.setState({ searchResults: this.state.search });
    });
  }


  
    getFilterFood =() => {
      const {foods, searchResults} = this.state
  
      if (searchResults) {
          return foods.filter(food => food.name.toLowerCase().includes(searchResults.toLowerCase()))
      } else {
          return foods 
      }
    }
  
  

render() {

  return (
    <div className="App">

      <AddFoodForm onSubmitFood={this.onSubmitFood} />
      <Search  search={this.searchResults} onChange={this.onChange}/>
      <FoodList foods={this.getFilterFood()}/>
    </div>
  );
}
}

export default App;
