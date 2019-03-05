import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      addFood: false,
    };
  }

  changeAddFoodState = () => {
    this.setState({
      addFood: !this.state.addFood
    });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const calories = e.target.calories.value;
    const image = e.target.image.value;
    console.log(name,' ', calories,' ', image);
    foods.push({name, calories, image, quantity: 0});
    this.changeAddFoodState();
  }


  render() {
    console.log(foods);
    if(this.state.addFood){
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <form onSubmit={(e) => this.handleFormSubmit(e)}>
            <input type="text" name="name"></input>
            <input type="number" name="calories"></input>
            <input type="file" name="image" accept="image/*"></input>
            <input type="submit" value="Add New Food!"></input>
          </form>
          {foods.map((food,index) => {
            return (
              <div key={index}>
                <FoodBox {...food}/>
              </div>
            );
          })}
        </div>
      );
    } else{
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={this.changeAddFoodState}>Add New Food</button>
          {foods.map((food,index) => {
            return (
              <div key={index}>
                <FoodBox {...food}/>
              </div>
            );
          })}
        </div>
      );
    }
  }
}

export default App;
