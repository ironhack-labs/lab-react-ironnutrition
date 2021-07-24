import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import foods from '../../foods.json';
import FoodBox from '../FoodBox';
import FoodForm from '../FoodForm';
import Search from '../Search';

class Foods extends Component {
  state = {
    form: false,
    foods,
    filteredFoods: foods,
  };

  handleClick = () => {
    this.setState({
      form: !this.state.form,
    });
  };

  filterFood = (inputSearch) => {
    const filtered = this.state.foods.filter((food) => {
      return food.name.toLowerCase().includes(inputSearch.toLowerCase());
    });
    this.setState({
      filteredFoods: filtered,
    });
  };

  addFood = (food) => {
    let newFoods = [...this.state.foods];
    newFoods.push(food);
    this.setState({
      foods: newFoods,
      form: false,
    });
  };

  render() {
    return (
      <>
        <hi className=" p-1 m-3">IronNutrition</hi>
        <Search filterFood= {this.filterFood} />
        <button
          className="button level-left p-5"
          onClick={() => {
            this.handleClick();
          }}
        >
          {!this.state.form ? 'Add Food' : 'Hide'}
        </button>
        {this.state.form ? <FoodForm addFood={this.addFood} /> : null}
        <div>
          {this.state.filteredFoods.map((food, index) => {
            return (
              <FoodBox
                key={index}
                name={food.name}
                calories={food.calories}
                image={food.image}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default Foods;
