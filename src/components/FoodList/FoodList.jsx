import React from 'react';
import './FoodList.css';
import foods from '../../foods.json';
import FoodBox from '../FoodBox/FoodBox';
import NewFood from '../NewFood/NewFood';
import SearchBar from '../SearchBar/SearchBar';

class FoodList extends React.Component {
  state = {
    foods: foods,
    search: '',
    todayFood: [],
  };

  onAdd = (food) => {
    this.setState({
      foods: [food, ...this.state.foods],
    });
  };

  onSearch = (search) => {
    this.setState({
      search: search,
    });
  };

  onAddToday = (tFood) => {
    this.setState({
      todayFood: [tFood, ...this.state.todayFood],
    });
    // console.log('array todaFood', this.state.todayFood);
  };

  render() {
    return (
      <div className="FoodList">
        <NewFood onAdd={this.onAdd} />
        <SearchBar onSearch={this.onSearch} />
        {this.state.foods
          .filter((food) =>
            food.name.toLowerCase().includes(this.state.search.toLowerCase())
          )
          .map((food) => (
            <FoodBox onAddToday={this.onAddToday} {...food} />
          ))}
        <ul>
          {this.state.todayFood.map((tFood) => {
            console.log(this.state.todayFood);
          })}
        </ul>
      </div>
    );
  }
}

export default FoodList;
