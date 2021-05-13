import React, { Component } from 'react';
import FoodBox from './FoodBox.js';

import TodaysFood from './TodaysFood';
import uuid from 'react-uuid';
import AddFood from './AddFood.js';

import foods from '../foods.json';
import './FoodsList.css';


class FoodsList extends Component {
    state = {
      foods: [...foods],
      search: '',
    };
  
    increaseQuantity = (e) => {
      e.preventDefault();
      const name = e.target.name;
      this.setState((prevState) => ({
        foods: prevState.foods.map((food) =>
          food.name === name ? { ...food, added: true } : food
        ),
      }));
    };
  
    handleInputChange = (e) => {
      const value = e.target.value;
      const name = e.target.name;
      this.setState((prevState) => ({
        foods: prevState.foods.map((food) =>
          food.name === name && !food.added ? { ...food, quantity: value } : food
        ),
      }));
    };
  
    //   handleInputSearch = (event) => {
    //     this.setState({ searchInput: event.target.value.toLowerCase() });
    //     let searchedFoods = this.state.foods.filter((food) =>
    //       food.name.toLowerCase().includes(event.target.value.toLowerCase())
    //     );
    //     this.setState({
    //       foods: searchedFoods,
    //     });
    //   };
  
    createFood = (newFood) => {
      this.setState({
        foods: [...this.state.foods, newFood],
      });
    };
  
    handleClickRemove = (name) => {
      this.setState((prevState) => ({
        foods: prevState.foods.map((food) =>
          food.name === name ? { ...food, quantity: 0, added: false } : food
        ),
      }));
    };
  
    onSearch = (e) => {
      this.setState({
        search: e.target.value,
      });
    };
  
    filterFood = () => {
      let foods = [...this.state.foods];
      if (this.state.search) {
        foods = this.state.foods.filter(({ name }) =>
          name.toLowerCase().includes(this.state.search)
          || name.toUpperCase().includes(this.state.search)
          || name.includes(this.state.search)
        );
      }
  
      return foods;
    };
  
    render() {
      let allFoods = this.filterFood();
  
      return (
        <div className="FoodList p-3 m-3">
          <h1>
            <b>Search Food</b>
          </h1>
          <form className="box">
            <input
              placeholder="Search food"
              className="input mb-2"
              value={this.state.search}
              type="search"
              onChange={this.onSearch}
            />
          </form>
  
          <div className="ui-wrapper">
            <div className="allFoods">
              {allFoods.map((food, idx) => {
                return (
                  <FoodBox
                    key={uuid()}
                    {...food}
                    addFood={(e) => this.increaseQuantity(e)}
                    handleInputChange={(e) => this.handleInputChange(e)}
                  />
                );
              })}
            </div>
            <TodaysFood
              foods={this.state.foods}
              handleClickRemove={this.handleClickRemove}
            />
          </div>
          <AddFood createFood={this.createFood} />
        </div>
      );
    }
  }
  
  export default FoodsList;