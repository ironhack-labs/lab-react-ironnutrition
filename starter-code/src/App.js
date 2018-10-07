import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import Foodbox from "./Foodbox.js";
import NewFood from "./NewFood.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isAddingFood: false,
      // foods: {}
    };
    // this.handleAddFood = this.handleAddFood.bind(this);
  }

  // handleAddFood() {
  //   if (this.state.isAddingFood === false) {
  //     this.setState ({ isAddingFood: true });
  //   } else {
  //     this.setState = { isAddingFood: false }
  //   }

  //   console.log(this.state)

  // }

  handleSubmit() {
    let hidden = !this.state.hidden;
    this.setState({
      hidden
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Ironnutrition</h1>
        </header>
        <div hidden={this.state.hidden}>
          <label>Item</label>
          <input type="text" value="name" />
        </div>
        <button onClick={this.handleSubmit.bind(this)}>Add new food</button>
        {" "}
        {/* <div>
          {this.state.isAddingFood === true ? (
            <NewFood onSubmit={foods => this.setState.foods} />
          ) : null}
        </div> */}
        <Foodbox />
      </div>
    );
  }
}

export default App;
