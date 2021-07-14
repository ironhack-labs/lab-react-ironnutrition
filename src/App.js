import React, { Component, createRef } from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import './App.css';
import FoodList from './FoodList';
import Search from './Search';

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [...foods],
    };
  }

  searchFilter = (state) => {
    console.log(state.searchQuery);

    const filteredFoods = foods.filter((el) =>
      el.name.toLowerCase().startsWith(state.searchQuery.toLowerCase())
    );

    console.log(filteredFoods);

    this.setState({
      list: [...filteredFoods],
    });
  };

  render = () => (
    <>
      <h1>IronNutrition</h1>

      {this.state.list.length}

      <Search searchFilter={this.searchFilter} />

      <div className="box">
        <FoodList list={this.state.list} />
      </div>
    </>
  );
}

export default App;
