import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './foodbox/FoodBox';


class App extends React.Component {
  state = {
    addForm: false,
    foodName: '',
    calories: '',
    image: '',
    foods: foods,
    search: '',
    todaysFoods: [],
  };

  showForm = () => {
    this.setState({ addForm: !this.state.addForm });
  };

  listenForInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addFood = (e) => {
    e.preventDefault();
    const food = {
      name: this.state.foodName,
      calories: this.state.calories,
      image: this.state.image,
      quantity: 0,
    };

    this.setState({
      foods: this.state.foods.concat(food),
      addForm: false,
    });
  };

  setFood = (e) => {
    
        this.setState({
          todaysFoods: this.state.todaysFoods.concat({
            amount: e.amount,
            food: e.food,
          }),
        });
    
  };

  render() {
    return (
      <div className="App">
        <div className="columns">
          <div className="column">
            <div className="field">
              <div className="control">
                <input
                  id="search-bar"
                  className="input"
                  type="text"
                  placeholder="Search..."
                  name="search"
                  onChange={this.listenForInput}
                  value={this.state.search}
                />
              </div>
            </div>
            <button className="button box" onClick={this.showForm}>
              Add Food
            </button>
            {this.state.addForm ? (
              <div className="box">
                <form onSubmit={this.addFood}>
                  <div className="field">
                    <label className="label">Name:</label>
                    <div className="control">
                      <input
                        id="add-food-input"
                        className="input"
                        type="text"
                        placeholder="Food name"
                        name="foodName"
                        onChange={this.listenForInput}
                        value={this.state.foodName}
                      />
                    </div>
                    <label className="label">Calories:</label>
                    <div className="control">
                      <input
                        id="add-food-input"
                        className="input"
                        type="number"
                        placeholder="0"
                        name="calories"
                        onChange={this.listenForInput}
                        value={this.state.calories}
                      />
                    </div>
                    <label className="label">Image Url:</label>
                    <div className="control">
                      <input
                        id="add-food-input"
                        className="input"
                        type="text"
                        placeholder="http://..."
                        name="image"
                        onChange={this.listenForInput}
                        value={this.state.image}
                      />
                    </div>
                  </div>
                  <button id="add-food-button" className="button" type="submit">
                    Add food to list
                  </button>
                </form>
              </div>
            ) : null}
            {this.state.foods.map((food, i) => {
              if (
                food.name
                  .toLowerCase()
                  .includes(this.state.search.toLowerCase())
              ) {
                return <FoodBox food={food} key={i} onSetFood={this.setFood} />;
              }
            })}
          </div>
          <div className="column">
            <h1 className="title">Today's foods:</h1>
            <div className="content">
              <ul>
                {this.state.todaysFoods.map((food, i) => {
                  return (
                    <li key={i}>
                      {' '}
                      {food.amount} {food.food.name} ={' '}
                      {parseInt(food.food.calories) * parseInt(food.amount)} cal{' '}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;