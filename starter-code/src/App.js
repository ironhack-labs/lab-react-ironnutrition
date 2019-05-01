import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import foods from "./foods.json";
import Foodbox from "./components/Foodbox";
import "bulma/css/bulma.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      myFoods: [],
      cFoods: foods
    };
  }

  changeFormData(e) {
    const newState = { ...this.state };
    var input = e.target.value;
    newState.cFoods = foods.filter(function(hero) {
      return hero.name == input;
    });

    this.setState(newState);
  }

  newFood(newBookDetails) {
    var booksIncludingNewBook = [...this.state.myFoods];
    booksIncludingNewBook.push(newBookDetails);
    this.setState({
      ...this.state,
      myFoods: booksIncludingNewBook
    });
    console.log(this.state);
  }
  deleteFood(id) {
    console.log(id),
      this.setState({
        ...this.state,
        allContacts: this.state.allContacts.filter(movie => movie.key !== id)
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <hr />
        <div>
          <input
            type="text"
            name="name"
            placeholder="write a name"
            onChange={e => this.changeFormData(e)}
          />
        </div>
        <div class="columns is-3">
          <div class="column ">
            {this.state.cFoods.map(food => (
              <Foodbox
                name={food.name}
                image={food.image}
                calories={food.calories}
                quantity="1"
                new={() =>
                  this.newFood(
                    <Foodbox
                      name={food.name}
                      image={food.image}
                      calories={food.calories}
                      quantity="1"
                      new={newBook => this.addNewBook(newBook)}
                    />
                  )
                }
              />
            ))}
          </div>
          <div class="column">{this.state.myFoods}</div>
        </div>
      </div>
    );
  }
}

export default App;
