import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './datasets/foods';
import FoodBox from './components/FoodBox';
import Header from './components/misc/Header';
import SearchBox from './components/SearchBox';
import FoodMenu from './components/FoodMenu';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foods: [...foods],
      menu: [],
      search: ''
    };
  }

  onSearch = search => {
    this.setState({ search });
  }

  onAddToMenu = food => {
    const menuExceptFood = this.state.menu.filter(f => f.name !== food.name);

    this.setState({
      menu: [...menuExceptFood, food]
    });
  }

  render() {

    const foodBoxes = this.state.foods
    .filter(food => food.name.toLowerCase().includes(this.state.search.toLowerCase()))
    .map(food => (
      <FoodBox food={food} key={food.name} onAddToMenu={this.onAddToMenu}/>
    ));

    return (
      <div className="App">
        <Header />
        <SearchBox onSearch={this.onSearch}/>
        <div className="columns">
          <div className="column">
            {foodBoxes}
          </div>
          <div className="column">
            <FoodMenu foods={this.state.menu} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
