import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox'
import Form from './components/Form'
import Search from './components/Search'



class App extends Component {

  constructor() {
    super();
    this.state = {
      foods,
      btnClicked: false,
      displayForm: "",
      filtered: foods,
    }

  }

  showForm() {
    this.setState({
      ...this.state,
      btnClicked: !this.state.btnClicked
    });

  }

  updateState(newFood) {
    let newState = {
      ...this.state
    };
    newState.foods.unshift(newFood);
    this.setState(newState)
  }

  updateSearch(e) {
    let search = e.target.value;
    let foodsSearch = [...this.state.filtered];
    this.setState({
      ...this.state,
      foods: foodsSearch.filter(food =>
        food.name.toLowerCase().includes(search.toLowerCase())
      )
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="title">IronNutrition</h1>
          <div>
          <Search
          updateSearchFormData={e => this.updateSearch(e)}
        ></Search>
          </div>
          <button onClick={() => this.showForm()} >Add new food</button>

          <div className={`${this.state.btnClicked ? "active" : "hidden"}`}>
            <Form sendStateFromApp={state => this.updateState(state)}></Form>
          </div>

          {this.state.foods.map((food, i) => (
            <FoodBox
              key={i}
              name={food.name}
              calories={food.calories}
              image={food.image}
              quantity={food.quantity}>

            </FoodBox>

          ))
          }
        </div>
      </div>
    );
  }
}

export default App;
