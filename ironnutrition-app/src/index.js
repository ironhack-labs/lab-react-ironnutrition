import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';

import foods from './foods.json';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      todayFoods: []
    };
  }

  inputHandle = event => {
    //capture new search term
    let newTerm = event.target.value;
    this.setState({
      searchTerm: newTerm
    });
    console.log('SEARCH TERM', this.state.searchTerm);
  };

  addHandle = (name, quantity) => {
    //add to today food array
    let newTodayFoodsArray = this.state.todayFoods.slice();

    let newFood = foods.find(
      food => food.name.toLowerCase() === name.toLowerCase()
    );

    newFood.quantity = quantity;
    newTodayFoodsArray.push(newFood);

    this.setState({
      todayFoods: newTodayFoodsArray
    });
  };

  render() {
    let display = '';
    if (this.state.searchTerm === '') {
      display = foods.map(food => {
        return (
          <FoodBox
            key={food.name}
            name={food.name}
            image={food.image}
            calories={food.calories}
            quantity={food.quantity}
            add={(e, q) => this.addHandle(e, q)}
          />
        );
      });
    } else
      display = foods
        .filter(food => {
          return food.name.toLowerCase().includes(this.state.searchTerm);
        })
        .map(food => {
          return (
            <FoodBox
              key={food.name}
              name={food.name}
              image={food.image}
              calories={food.calories}
              quantity={food.quantity}
              add={(e, q) => this.addHandle(e, q)}
            />
          );
        });

    return (
      <div>
        <h1>IronNutrition</h1>
        <Search
          search={this.state.searchTerm}
          onChange={e => this.inputHandle(e)}
        />
        <div className="columns">
          <div className="column"> {display}</div>
          <div className="column content">
            <h2 className="subtitle">Today's Foods</h2>
            <ul>
              {this.state.todayFoods.map(food => {
                return (
                  <li>{`${food.quantity} ${food.name} - ${food.calories *
                    food.quantity} cal`}</li>
                );
              })}
            </ul>
            Total:
            {/* Total: {this.displaySelectedFoodsTotCal()} cal */}
          </div>
        </div>
      </div>
    );
  }
}

class FoodBox extends React.Component {
  constructor() {
    super();
    this.state = {
      qty: 1
    };
  }

  quantityHandle = event => {
    if (this.state.qty >= 1) {
      this.setState({
        qty: event.target.value
      });
    } else
      this.setState({
        qty: 1
      });
  };

  render() {
    //console.log("FoodBox's props", this.props);
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} alt="" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <br />
                <small>{this.props.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  name="qty"
                  value={this.state.qty}
                  onChange={e => this.quantityHandle(e)}
                />
              </div>
              <div className="control">
                <button
                  className="button is-info"
                  onClick={(name, quantity) =>
                    this.props.add(this.props.name, this.state.qty)
                  }
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

class Search extends React.Component {
  render() {
    return (
      <div>
        <input
          className="input search-bar"
          type="text"
          name="search"
          placeholder="Search"
          value={this.props.search}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
