import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './FoodBox';
import FormNewFood from './FormNewFood';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: foods,
      showForm: false
    };
    this.FoodForm = this.FoodForm.bind(this)
  }

  FoodForm(){
    this.setState({ showForm: !this.state.showForm})
    // console.log(this.state.showForm)
  }

  render() {
    const {showForm} = this.state;
    return (
      <div>
        <button onClick={this.FoodForm}>
          SHOW FORM
        </button>
        <div>
        {showForm && <FormNewFood/>}
        </div>
        {this.state.foods.map((elem , idx)=> {
          return <FoodBox key={idx} name={elem.name} calories={elem.calories} image={elem.image} quantity={elem.quantity}/>
         })}
         
      </div>
    );
  }
}

export default App;
