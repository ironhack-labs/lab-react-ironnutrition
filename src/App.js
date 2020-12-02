import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

import React, { Component } from 'react';

export default class App extends Component {
  state = {
    myFoods: foods,
    showForm: false,
    name: '',
    calories: 0,
    image: '',
    search: "",
    namesArr: foods.map ((el)=>{
      const name = el.name;
      return name;
    })
  };
  
  handleClick = () => {
    this.setState({ showForm: !this.state.showForm });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    let floor = [...this.state.myFoods];
    floor.push({
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
    });
    this.setState({ myFoods: floor });
    this.setState({ showForm: false });
  };

  handleInput = (event) => {
    //get name and value from form
    const { name, value } = event.target;
    //and set the value for each key (input name)
    this.setState({ [name]: value });
  };

  handleSearchInput = (event) =>{
    //get value from form
    const { value } = event.target;
    //filter over the foods array // no need to floor, as filter creates new arr
    //but first we need to map an array of only the names (above in state)
    const filteredArr = this.state.namesArr.filter((el)=>{
      if (el.includes(value)){
        return el;
      }
    })
    console.log('filteredArr :>> ', filteredArr);
    //update the state
    this.setState ({myFoods: filteredArr})
    this.setState ({search: value})

  }

  render() {
    return (
      <div>
        
        {<form>
        <label>Search: </label>
        <input
              type="text"
              name="search"
              value={this.state.search}
              onChange={this.handleSearchInput}
            />
        </form>}

        {this.state.myFoods.map((el, i) => {
          return (
            <FoodBox
              key={i}
              name={el.name}
              calories={el.calories}
              image={el.image}
            />
          );
        })}
        <button onClick={this.handleClick}>New</button>
        {this.state.showForm === true ? (
          <form onSubmit={this.handleSubmit}>
            <label>Name: </label>
            <br />
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInput}
            />
            <br />
            <label>Calories: </label>
            <br />
            <input
              type="text"
              name="calories"
              value={this.state.calories}
              onChange={this.handleInput}
            />
            <br />
            <label>Image: </label>
            <br />
            <input
              type="text"
              name="image"
              value={this.state.image}
              onChange={this.handleInput}
            />
            <br />
            <button type="submit"> Add new food </button>
          </form>
        ) : null}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
