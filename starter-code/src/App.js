import React, { Component } from 'react';
import foods from './foods.json'
import FoodBox from './components/FoodBox'
import './App.css';

class App extends Component {
  state = {
    allFoods: foods,
    food: {},
    filtered: [],
    arrRespaldo:[]
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ allFoods: [...this.state.allFoods, this.state.food] });
  };

  handleInput = (e) => {
    const { food } = this.state;
    const key = e.target.name;
    food[key] = e.target.value;
    this.setState({ food });
  };

  search = (e) => {
    const { value } = e.target;
    const { allFoods } = this.state;
    const query = value.toLowerCase();
    const filtered = allFoods.filter(
      (food) => food.name.toLowerCase().includes(query)
    );
    this.setState({ filtered });
  };

  showForm = (e) => {
    this.setState({ showStore: true });
  };

  hiddeForm = (e) => {
    this.setState({ showStore: false });
  };

  buttonAzul= (e) => {
    
  };

  handleClick= (e) => {
    const {allFoods } = this.state;
    console.log(allFoods)
  };

  
  render() {
    const { allFoods, filtered } = this.state;

    return (
      <div className="container">
        <h1 className="title">IronNutrition</h1>
        <div>
          <input onChange={this.search} name="search" type="text" className="input search-bar" placeholder="Search" />
          <div className="columns">
            <div className="column">

              {filtered.length === 0 && allFoods.map((food, idx) => (
                <div className="column" key={idx}>
                  <FoodBox name={food.name} image={food.image} calories={food.calories} quantity={food.quantity} handleClick={this.handleClick} buttonAzul={this.buttonAzul}></FoodBox>
                </div>

              ))}

              {filtered.length !== 0 && filtered.map((food, idx) => (

                <div className="column" key={idx}>
                  <FoodBox name={food.name} image={food.image} calories={food.calories} quantity={food.quantity} handleClick={this.handleClick} buttonAzul={this.buttonAzul}></FoodBox>
                </div>
              ))}
            </div>

            <div className="column">
              <input type="button" onClick={this.showForm} className="button is-primary" value="Add new food" />
              <div style={{ display: this.state.showStore ? 'block' : 'none' }} className="content">
                <form onSubmit={this.onSubmit}>
                  <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                      <input onChange={this.handleInput} name="name" className="input" type="text" placeholder="Name of the food" />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Number of calories</label>
                    <div className="control">
                      <input onChange={this.handleInput} name="calories" className="input" type="number" placeholder="Add food calories" />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Quantity</label>
                    <div className="control">
                      <input onChange={this.handleInput} name="quantity" className="input" type="number" placeholder="Add quantity" />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Image</label>
                    <div className="control">
                      <input onChange={this.handleInput} name="image" className="input" type="text" placeholder="Add image Url" />
                    </div>
                  </div>

                  <div className="field is-grouped">
                    <div className="control">
                      <input onClick={this.hiddeForm} type="submit" className="button is-link" value="Add Food" />
                    </div>
                    <div className="control">
                      <button onClick={this.hiddeForm} type="reset" className="button is-text">Cancel</button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="content">
                <h2 class="subtitle">Today's foods</h2>
                  <ul>
                    <li>1 Pizza = 400 cal</li>
                  </ul>
                <strong>Total: 700 cal</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App