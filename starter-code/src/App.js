import React, { Component } from 'react';
import foods from './foods.json';
import 'bulma/css/bulma.css';
import './App.css';
import FoodBox from './componets/FoodBox';
import Form from './componets/Form';

class App extends Component {

  state = {
    foods: foods,
    clicked: true,
    form: {
      "name": "",
      "calories": 0,
      "image": "",
      "quantity": 0
    },
    searchBar: {
      input: ""
    },
    filterData: [],
    sumCalory: [],
    listOfFood: []
  }

  addFood = e => {
    e.preventDefault();
    this.setState(prevState => {
      return {
        ...prevState,
        foods: [this.state.form, ...prevState.foods]
      }
    })
    this.setState({
      form: {
        "name": "",
        "calories": 0,
        "image": "",
        "quantity": 0
      }
    })
    this.isClick()
  }

  isClick = () => {
    this.setState({
      "clicked": !this.state.clicked
    })
  }

  handleInput = e => {
    e.preventDefault();
    const { form } = this.state
    const key = e.target.name
    form[key] = e.target.value
    this.setState({ form })
  }

  handleSearch = e => {
    e.preventDefault();
    const { searchBar } = this.state
    const key = e.target.name
    searchBar[key] = e.target.value
    this.setState(prevState => {
      const filterData = prevState.foods.filter(food => {
        return food.name.toLowerCase().includes(searchBar[key].toLowerCase());
      });
      this.setState({ filterData })
    });
  }


  handleQuantity = (e, name) => {
    const { value } = e.target
    const { foods } = this.state
    const idx = this.state.foods.findIndex(food => food.name === name)
    this.setState(prevState => {
      return {
        ...prevState,
        foods: [
          ...prevState.foods,
          foods[idx]["quantity"] = value
        ]
      }
    })
  }


  handleCaloriesQuantity = (e, name) => {
    e.preventDefault();
    const { foods } = this.state
    const idx = this.state.foods.findIndex(food => food.name === name)
    this.setState(prevState => {
      return {
        listOfFood: [
          ...prevState.listOfFood,
          foods[idx]
        ]
      }
    })
  }
  
  render() {
    return (
      <div className="App">
        <div className="control">
          <button onClick={this.isClick}>create food</button>
        </div>
        <div className="field has-addons">
          <div className="control">
            <input className="input" type="text" name="input" placeholder="Buscar"
              onChange={this.handleSearch} />
          </div>
          <div className="control">
            <a className="button is-info">
              Search
            </a>
          </div>
        </div>
        <div id="main-container">
          <div className="container">
            {
              (this.state.filterData.length !== 0) ?
                this.state.filterData.map((food, index) => (
                  <div key={index} >
                    <FoodBox handleCaloriesQuantity={this.handleCaloriesQuantity} handleQuantity={this.handleQuantity} food={food} handleInput={this.handleInput} />
                  </div>
                )):
                this.state.clicked ?
                  this.state.foods.map((food, index) => (
                    <div key={index} >
                      <FoodBox handleCaloriesQuantity={this.handleCaloriesQuantity} handleQuantity={this.handleQuantity} food={food} handleInput={this.handleInput} />
                    </div>
                  )):
                  <Form isClick={this.isClick} addFood={this.addFood} handleInput={this.handleInput} />
            }
          </div>
          <div className="container">
            {
              <div>
                <h1>Today's Food</h1>
                <p>Total cal </p>
                {

                  this.state.listOfFood.map((food, index) => (
                    <ul key={index} >
                      <li> {food.quantity} {food.name} = {food.quantity * food.calories} </li>
                      <div hidden>
                        {this.state.sumCalory.push(food.quantity * food.calories)}
                      </div>
                    </ul>
                  ))
                }
                <p>
                  Total: {this.state.sumCalory.reduce((acc, el) => acc + el, 0)}
                </p>

              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;