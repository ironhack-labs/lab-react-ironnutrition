import React, { Component } from 'react';
import FoodBox from './components/FoodBox';
import Form from './components/Form';
import foods from './foods.json';
import 'bulma/css/bulma.css';
import './App.css';

class App extends Component {

  state = {
    allfood: foods,
    form: true,
  }

  toggleForm = () => {
    this.setState({
      form: !this.state.form,
    })
  }

  render() {
    const { allfood, form } = this.state;
    return (
      <div className="container">
        <h1 className="title">IronNutrition</h1>
        <button onClick={this.toggleForm} className="button is-normal is-danger">Add new food</button>
        { !form && <Form /> }
        { form && <div>{allfood.map(item => <FoodBox name={item.name} calories={item.calories} image={item.image} />)}</div> }
      </div>
    );
  }
}

export default App;
