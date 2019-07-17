import React, { Component } from 'react';
import './App.css';
import data from './foods.json'
import FoodBox from './components/FoodBox'

class App extends Component {
  state = {
    foods: data
  }

  handleChange = e => {
    const {target: {name, value}} = e
    this.setState({
      [name]: value
    })
    console.log(e.target)
  }

  displayForm = () => {
    
  }
  
  render() {
    const {foods} = this.state
    return (
      <div className="App">
        <button class="button is-info" onClick={this.displayForm}>Create</button>
        {foods.map((food, i) => (
          <FoodBox {...food} key={i} handleChange={this.handleChange}/>
        ))}
      </div>
    );
  }
}

export default App;
