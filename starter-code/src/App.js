import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox';
import Form from './components/Form';

class App extends Component {
  state = {
    foodsArr: foods,
    food: {
      name: '',
      calories: '',
      image: '',
      quantity: 0
    }
  }

  handleSubmit = e => {
    e.preventDefault() 
    const {food,foodsArr} = this.state
    console.log(food)
    this.setState({...foodsArr.push(food)})
    console.log(foodsArr)
  }

  handleChange = e => {
    const {food} = this.state
    food[e.target.name] = e.target.value
    this.setState({food})
    //console.log(food)
  }

  render() {
    const { foodsArr } = this.state
    return (
      <div className="App">
        <div>
          <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        </div>
        <div className="column is-two-fifths">
          {
            foodsArr.map((e, i, a) => {
              return <FoodBox food={e} key={i} />
            })
          }
        </div>


      </div>
    )
  }
}

export default App;
