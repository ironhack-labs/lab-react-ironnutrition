import React from 'react';
import './App.css';
import fileFoods from './foods.json';
import FoodBox from './Components/FoodBox/FoodBox';
import Search from './Components/Search/Search';
import List from './Components/List/List';
import Modal from './Components/Modal/Modal'

class App extends React.Component {
  state = {
    foods: fileFoods,
    filteredFoods: fileFoods,
    todayFoods: []
  };

  render() {
    return (
      <div className="App" >
        <Search searchMethod={this.filterFoods} />
        <Modal addFoodMethod={this.addFood}/>
        <div className="columns">
          <div className="column">
            {this.fillFoodBox()}
          </div>
          <div className="column">
            <List foods={this.state.todayFoods}>Today's foods</List>
          </div>
        </div>
      </div>
    );
  }

  fillFoodBox() {
    return this.state.filteredFoods.map((element, index) => <FoodBox key={index} food={element} addTodayFoodMethod={this.addTodayFood} />);
  }

  addFood = newFood => {
    const newFoods = [...this.state.foods];
    newFoods.push(newFood);
    this.setState({ foods: newFoods }, () => console.log(this.state.foods));
  }

  filterFoods = text => {
    const filteredFoods = this.state.foods.filter(e => e.name.includes(text));
    this.setState({ filteredFoods: filteredFoods });
  }

  addTodayFood = food => {
    const newTodayFoods = [...this.state.todayFoods];
    newTodayFoods.push(food);
    this.setState({ todayFoods: newTodayFoods }, () => console.log(this.state.todayFoods));
  }
}

export default App;
