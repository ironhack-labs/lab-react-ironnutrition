import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox.jsx'
import Form from './components/Form.jsx'
import Search from './components/Search.jsx'


class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      foods,
      button: false
    }
    this.addFood = this.addFood.bind(this);
    // this.addQuantity = this.addQuantity.bind(this);
  }

  clickMe(event) {
    this.setState({
      button: true
    })
  }

  hideForm() {
    this.setState({
      button: false
    })
  }

  addFood(food) {
    let newFood = [...this.state.foods];
    newFood.unshift(food);
    console.log(food)
		this.setState({
			foods: newFood
		})
  }

  // addQuantity(newNumber) {
  //   this.setState({
  //     quantity: newNumber,
  //     calories: 
  //   })
  // }

  render() {
    return (
      <div className="App">
        <button onClick={(e) => this.clickMe(e)}>Create new food</button>
        {
          this.state.button ? 
          <Form {...this.state} hideForm={() => this.hideForm()} addFood={this.addFood}/>
          :
          null
         }

        {/* if (this.button <Form />) */}

        <Search {...this.state}/>
      </div>
    );
  }
}

export default App;
