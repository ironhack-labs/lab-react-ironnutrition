import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";

class Foodbox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src="https://i.imgur.com/eTmWoAN.png" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.listFood[0].name}</strong> <br />
                <small>400 cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" value="1" />
              </div>
              <div className="control">
                <button className="button is-info">+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
      /*<tr>
          <td><img src={this.props.celeb.pictureUrl} width="50px"></img></td>
          <td>{this.props.celeb.name} - {this.isEven(this.props.celeb.name)}</td>
          <td>{this.props.celeb.popularity}</td>
          <td><button onClick={() => this.props.clickDelete(this.props.celeb.name)}>Delete</button></td>
        </tr> */
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    console.log(foods)
    console.log(foods.slice(0,5))
    this.state = {listFood: foods}
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

        <Foodbox listFood={this.state.listFood} ></Foodbox>

      </div>
    );
  }
}

export default App;
