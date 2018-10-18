import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json'

class FoodTag extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64"> <img src={this.props.image} /></figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <br />
                <small>{this.props.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" value="1" />
              </div>
              <div className="control">
                <button className="button is-info">
                  +
      </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    )
  }
}




class App extends Component {
  constructor(props){
    super(props)
    this.state={foods, displayForm: false}
  }

  toggleTitle() {
    this.setState({ displayForm: !this.state.displayForm })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
        {this.state.displayForm ? (<form><input type="text" name="food" value="name"></input></form>): ''}
        <button onClick={this.toggleTitle.bind(this)}>{this.state.displayForm ? 'Submit new food' : 'Add new food'}</button>
        </div>
        {
          this.state.foods.map(food => {
            return (
              <FoodTag name={food.name} calories={food.calories} image={food.image}/>
            )
          }

          )
        }
        <FoodTag name/>
      </div>
    );
  }
}

export default App;
