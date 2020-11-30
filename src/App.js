import React from 'react';
import logo from './logo.svg';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import DayFood from './components/DayFood';
import 'bulma/css/bulma.css';
import './App.css';

class App extends React.Component {
  state = {
    allFood: foods,
    filteredFood: foods,
    todayFood: [],
    showForm: false,
    calories: 0
  };

  

  handleSearch = (event) => {
    const search = event.target.value;
    const { allFood } = this.state;

    let filteredFood = allFood.filter((food) => {
      return food.name.toLowerCase().includes(search.toLowerCase());
    });

    this.setState({
      filteredFood: filteredFood,
    });
  };

  handleFormShow = () => {
    this.setState({
      showForm: true,
    });
  };

  handleAdd = (event) => {
    event.preventDefault();
    let food = event.target;
    const { allFood, filteredFood } = this.state;
    let newFood = {
      name: food.name.value,
      image: food.image.value,
      calories: food.calories.value,
      quantity: 0,
    };

    this.setState({
      allFood: [newFood, ...allFood],
      filteredFood: [newFood, ...filteredFood],
      showForm: false,
    });
  };

  handleAddToDay = (n, q, c) => {
    const { todayFood } = this.state;
    const dayFood = {
      name: n,
      quantity: Number(q),
      calories: c,
    };
    console.log(todayFood);
    for (let food in todayFood) {
      if (todayFood[food].name === n) {
        todayFood[food].quantity += Number(q);
        Number(todayFood[food].quantity);
        return this.setState({
          todayFood: [...this.state.todayFood],
        });
      }
    }
    this.setState({
      todayFood: [...this.state.todayFood, dayFood],
    });
  };

  render() {
    return (
      <div className="container">
        {this.state.showForm ? (
          <AddFood onAdd={this.handleAdd} />
        ) : (
          <button onClick={this.handleFormShow} class="button is-warning">
            Show
          </button>
        )}
          {/* Seacrh */}
        <input
          onChange={this.handleSearch}
          className="input is-primary"
          type="text"
          placeholder="Search"
        />

        <div className="collumns">
          <div className="collumn">
          {/* displaying all the foods */}
            {this.state.filteredFood.map((aFood) => {
              return (
                <FoodBox
                  onQuantity={this.handleQuantity}
                  onAdd={this.handleAddToDay}
                  aFood={aFood}
                />
              );
            })}
          </div>
            {/* iteration 5 */}
          <div className="todays-food collumn">
            <h1>Food for Today</h1>
            {this.state.todayFood.map((aFood) => {
              this.state.counter += aFood.quantity * aFood.calories
              return <DayFood aFood={aFood}/>;
            })}
            {/* not working as it should */}
            <p>Total calories: {this.state.counter}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;