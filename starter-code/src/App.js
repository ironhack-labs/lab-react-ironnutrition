import React, { Component } from 'react';
import './App.css';
import foods from './foods.json'
import FoodCard from './components/FoodCard';

class App extends Component {
  state = {
    allFoods : foods,
    food : {},
    filtered : [],
    todaysFood : []
  }

  addTodaysFood(name,calories,qty){
    console.log('here')
  
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ allFoods: [...this.state.allFoods, this.state.food]});
    console.log(this.state.allFoods)
  };
  
  handleInput = (e) => {
    const { food } = this.state;
    const key = e.target.name;
    food[key] = e.target.value;
    this.setState({food});
    console.log({food})
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

  render() {
    const { allFoods , filtered } = this.state;
    return (
      <div className="main columns is-centered">
        <div className="column is-5">

        <h1 className="title has-text-centered">Iron Nutrition</h1>
        <div id="foodForm" className="foodForm">
          <form onSubmit={this.onSubmit}>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Image</label>
            </div>
            <div className="field-body">
              <div className="field">
                <p className="control">
                  <input onChange={this.handleInput} name="image" className="input" type="text" placeholder="Image Url"/>
                </p>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Name</label>
            </div>
            <div className="field-body">
              <div className="field">
                <p className="control">
                  <input  onChange={this.handleInput} name="name" className="input" type="text" placeholder="Chicharron"/>
                </p>
              </div>
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Calories</label>
            </div>
            <div className="field-body">
              <div className="field">
                <p className="control">
                  <input onChange={this.handleInput} name="calories" className="input" type="text" placeholder="500"/>
                </p>
              </div>
            </div>
          </div>
          <div className="has-text-centered">
            <input className="button is-success" type="submit" value="Add Food"/>
          </div>
          </form>
          <div className="control">
            <label className="label">Search</label>
            <input className="input" placeholder="Search" onChange={this.search} type="text" name="search" />
          </div>
        </div>
    

        {filtered.length === 0 &&
          allFoods.map((food, idx) => (
            <FoodCard key={idx} name={food.name} image={food.image} calories={food.calories} addTodaysFood={this.addTodaysFood}></FoodCard>
          ))}
        {filtered.length !== 0 &&
          filtered.map((food, idx) => (
            <FoodCard key={idx} name={food.name} image={food.image} calories={food.calories} addTodaysFood={this.addTodaysFood}></FoodCard>
          ))}
    </div>
    </div>
    );
  }
}

export default App;
