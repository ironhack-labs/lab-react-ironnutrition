import React, { Component } from 'react';

import './App.css';
import foods from './foods.json';
import './Search';
import Search from './Search';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foods: foods,
      searchText: '',
      todaysFoods: [],
      numberOfFood: 1
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // fillArray() {
  //   var foodArray = foods.slice();
  //   for (let i = 0; i < foodArray.length; i++) {
  //     return foodArray[i].name;
  //   }
  //   console.log(foodArray);
  //   // this.setState({
  //   //   [food.name]: 1
  //   // })
  // }

  handleChange(e) {
    // console.log('e.target', e.target);
    // console.log('e.target.name', e.target.name);
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleClick(e, food) {
    // console.log('clicked!', food);
    this.state[food.name];
    var foodPractice = [...(food * food.quantity)];
    console.log('foodPractice: ', foodPractice);
    var newFood = [...this.state.todaysFoods, food];

    this.setState({
      todaysFoods: newFood
    });
  }

  componentDidMount() {
    var foodArray = foods.slice();
    for (let i = 0; i < foodArray.length; i++) {
      return foodArray[i].name;
    }
    console.log(foodArray);
  }

  render() {
    return (
      <div className="App columns">
        <div className="column">
          <div className="columns">
            <div className="column">
              <h1>IronNutrition</h1>
              <br />
              <Search text={this.state.searchText} onChange={this.handleChange} />
              <br />
              <br />
            </div>
          </div>
          <div className="column">
            <div className="columns">
              <div className="column is-5">
                <h2>Today's Foods</h2>
                {this.state.todaysFoods.map(food => (
                  <li>
                    {food.name} - {food.calories} cals
                  </li>
                ))}
              </div>
              <div className="column is-7">
                {this.state.foods
                  .filter(food => food.name.toLowerCase().includes(this.state.searchText.toLowerCase()))
                  .map(food => (
                    <div className="box" key={food.name}>
                      <article className="media">
                        <div className="media-left">
                          <figure className="image is-64x64">
                            <img src={food.image} alt="this is food" />
                          </figure>
                        </div>
                        <div className="media-content">
                          <div className="content">
                            <p>
                              <strong>{food.name}</strong> <br />
                              <small>{food.calories} cal</small>
                            </p>
                          </div>
                        </div>
                        <div className="media-right">
                          <div className="field has-addons">
                            <div className="control">
                              <input
                                className="input"
                                type="number"
                                name={food.name}
                                value={food.quantity}
                                onChange={this.handleChange}
                              />
                            </div>
                            <div className="control">
                              <button
                                className="button is-info"
                                onClick={e => this.handleClick(e, food)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
