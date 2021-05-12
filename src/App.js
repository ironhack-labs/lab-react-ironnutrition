import React from 'react';
import foods from './foods.json';
import 'bulma/css/bulma.css';
import './App.css';
import FoodBox from './components/FoodBox';
import Form from './components/Form';
import Search from './components/Search';

class App extends React.Component {
  state = {
    food: foods,
  };

  addFood = (food) => {
    const arrayCopy = [...this.state.food];
    arrayCopy.push(food);
    this.setState({ food: arrayCopy });
  };

  displayFood = () => {
    //esto es displayFood
    return this.state.food.map((food, index) => {
      return <FoodBox food={food} key={index} />;
    });
  };

  toggleForm() {
    this.setState({ showForm: !this.state.showForm })
  }
  findFood(query) {
   return this.setState({foods: this.state.food.filter(food => food.name.includes(query))})

  }
  render() {
    return (
      <div className="app">
        <Search findFood={(query) => this.findFood(query)} />
        <Form addFood={(food) => this.addFood(food)} />
        {this.displayFood()}
      </div>
    );
  }
}

export default App;
