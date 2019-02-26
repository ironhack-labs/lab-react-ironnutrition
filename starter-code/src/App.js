import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import Foods from './datasets/foods.json';
import Header from './components/misc/header';
import FoodBox from './components/FoodBox';
import Search from './components/Search'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      foods: [...Foods]
    }
  }

  onFilter = (search) => {
    const newFoods = Foods.filter(food => {
      return food.name.toLowerCase().includes(search.toLowerCase());
    });
    this.setState({foods: newFoods});
  }

  render() {

    const FoodList = this.state.foods.map((food,index) => {
      return <FoodBox key={index} {...food} />;
    })

    return (
      <div className="App">
        <Header />
        <div className="container">
          <Search onFilter={this.onFilter}/>
          {FoodList}
        </div>
      </div>
    );
  }
}

export default App;

