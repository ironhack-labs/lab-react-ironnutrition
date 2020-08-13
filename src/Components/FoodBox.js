import React, { Component } from 'react';
import foods from '../foods.json';
import AddFood from './AddFood';
import Search from './Search';

class FoodBox extends Component {
  constructor() {
    super();
    this.state = {
      Food: foods,
      filtered: foods,
      isClicked: false,
      SearchFood: '',
    };
  }

  dynamicSearch = (SearchFood) => {
    const filtered = this.state.Food.filter((food) => {
      console.log(food.name);
      return food.name.toLowerCase().includes(SearchFood.toLowerCase());
    });
    this.setState({
      filtered,
    });
  };

  showForm = () => {
    this.setState({ isClicked: !this.state.isClicked });
  };

  insertFood = (newFood) => {
    const createFood = [...this.state.filtered];
    createFood.push(newFood);
    this.setState({ filtered: createFood, isClicked: false });
  };

  render() {
    return (
      <div>
        <div>
          {this.state.isClicked ? <AddFood addFood={this.insertFood} /> : null}
          <button onClick={this.showForm} className="btn">
            Add Food
          </button>
        </div>
        <Search filterFood={this.dynamicSearch} />
        {this.state.filtered.map((value, index) => {
          return (
            <div className="box">
              <article className="media">
                <div className="media-left">
                  <figure className="image is-64x64">
                    <img src={value.image} alt="meal" />
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>{value.name}</strong> <br />
                      <small>{value.calories} cal</small>
                    </p>
                  </div>
                </div>
                <div className="media-right">
                  <div className="field has-addons">
                    <div className="control">
                      <input className="input" type="number" value="1" />
                    </div>
                    <div className="control">
                      <button className="button is-info">+</button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FoodBox;
