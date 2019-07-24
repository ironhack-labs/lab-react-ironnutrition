import React, { Component } from 'react';
import foods from './foods.json'
import 'bulma/css/bulma.css';
import './App.css';
import FoodBox from './components/FoodBox';
import Form from './components/Form';
import List from './components/List';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foodList: foods,
      addForm: false,
      searchBar: '',
      searchState: false,
      selectedFood: [],
      totalCalories: 0,
    }

    this.addFood = this.addFood.bind(this);
    this.foodSearch = this.foodSearch.bind(this);
    this.foodSelected = this.foodSelected.bind(this);
  }

  addButton() {
    this.setState({
      addForm: !this.state.addForm
    })
  }

  addFood(props) {
    console.log(props);
    let newList = [...this.state.foodList];
    newList.unshift(props);

    this.setState({
      foodList: newList,
    })
  }

  foodSearch(event) {
    if (event.target.value !== '') {
      this.setState({searchState: true})
    } else {
      this.setState({searchState: false})
    }
    const foodSearch = [...this.state.foodList];

    let search = this.state.searchBar.toUpperCase();
    
    let filter = foodSearch.filter(item => {
      return item.name.toUpperCase().includes(search);
    });

    this.setState({
      searchBar: event.target.value,
      searchList: filter,
    })
  }

  foodSelected(item) {
    const newSelectedFood = [...this.state.selectedFood];

    newSelectedFood.push(item);

    let total = 0;
    newSelectedFood.forEach(item => {
      total += item.calories;
    })

    this.setState({
      selectedFood: newSelectedFood,
      totalCalories: total,
    })
  }

  render() {
    return (
        <div className="container">
          <div className="level">
            <div className="level-left">
              <h1 className="title">IronNutrition</h1>
            </div>
            <div className="level-right">
              <button className="button is-primary" onClick={() => this.addButton()}>{this.state.addForm ? 'Close' : 'Add Food'}</button>
            </div>
          </div>

          {this.state.addForm ? <Form addFood={this.addFood} /> : ''}

          <input className="input search-bar" onChange={this.foodSearch} value={this.state.searchBar} placeholder="Search" />

          <div className="columns">
            <div className="column">
              
                {
                  this.state.searchState ? this.state.searchList.map((item, index) => <FoodBox foodSelected={this.foodSelected} {...item} key={index}/>) : this.state.foodList.map((item, index) => <FoodBox foodSelected={this.foodSelected} {...item} key={index}/>)}
              
            </div>
            <div className="column content">
              <h2 className="subtitle">Today's foods</h2>
              <ul>
                {this.state.selectedFood.map((item, index) => {
                  return <List {...item} key={index} />
                })}
              </ul>
              <strong>Total: {this.state.totalCalories} cal</strong>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
