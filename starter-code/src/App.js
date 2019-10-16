import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import FoodForm from './components/FoodForm';


class App extends Component {
  constructor(props) {
    super(props),
      this.state = {
        foods: foods,
        showForm: false,
      }
      // this.displayElements = this.displayElements.bind(this)
      this.callFoodForm = this.callFoodForm.bind(this)
  }
  callFoodForm() {
    console.log('eai monica, blz?');
    
  this.setState({
    showForm: !this.state.showForm,
  }) 
  }
  
  render() {
    return (
      <div>
        <button onClick={this.callFoodForm}>Add new food</button>
        {this.state.foods.map(e =>{ 
          let { name, calories, image, quantity} = e;
          return (
          <FoodBox name={name} calories={calories} image={image} quantity={quantity}/>
          )
        }
        )}{

        this.state.showForm && <FoodForm/> 
         
        }
      </div>
    )
  }
}

export default App;
