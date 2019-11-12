import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foodsJSON from './foods.json';
import FoodBox from './App/Components/FoodBox';
import FoodForm from './App/Components/NewFoodForm';
import Searchbar from './App/Components/Searchbar';

class App extends Component {
  state = {
    data: {
      foods: foodsJSON,
      filtered: foodsJSON,
      newFood: {
        name: '',
        calories: 0,
        image: '',
        quantity: 0
      },
      quantity: 0,
      search: ''
    },
    showFoodForm: false
  }

  handleChange = (event, index) => {
    let { data } = this.state;
    let { name, value } = event.target;
    let filtered = [...data.filtered];

    console.log('handling change')

    switch (name) {
      case 'search':
        data.search = value;
        filtered = data.foods.filter( food => food.name.toLowerCase().includes(data.search.toLowerCase()) );
        break;
      case 'food-quantity':
        filtered[index].quantity = value;
        console.log(filtered[index].quantity)
        break;
      case 'add-food-btn':
        event.preventDefault();
        console.log('filtered'+filtered[index].quantity)
        data.foods[index].quantity = filtered[index].quantity;
        console.log('foods'+data.foods[index].quantity)
        console.log(`${filtered[index].name} has been added: ${data.foods[index].quantity}`);
        filtered[index].quantity = 0;
        break;
      default:
        data.newFood[name] = value;
    }

    data.filtered = filtered;

    this.setState({ data });
  }

  onPress = event => {
    let { data } = this.state;
    event.preventDefault();

    data.foods.push(data.newFood);
    data.filtered.push(data.newFood);

    data.newFood = {
      name: '',
      calories: 0,
      image: '',
      quantity: 0
    }

    this.setState({ data, showFoodForm: false });
  }

  showNewFoodForm = () => {
    let { showFoodForm } = this.state;

    if (!showFoodForm) showFoodForm = true;
    else showFoodForm = false;

    this.setState({ showFoodForm });
  }

  render() {
    let { data, showFoodForm } = this.state;
    let { showNewFoodForm, handleChange, onPress } = this;

    return (
      <div className="App">
        <div className="container isfluid">
          <Searchbar handleChange={handleChange} search={data.search} />
          <div className="columns">
            <div className="column">
              {data.filtered.map( (food, index) => <FoodBox key={index} index={index} food={food} quantity={data.quantity} handleChange={handleChange} /> )}
            </div>
            <div className="column">
              <div className="container">
                <button className={showFoodForm ? "button is-danger" : "button is-info"} onClick={event => showNewFoodForm()}>{showFoodForm ? "Close" : "Add new food" }</button>
                {showFoodForm ? <FoodForm handleChange={handleChange} onPress={onPress} newFood={data.newFood}/> : <p> </p>}
              </div>
              <div className="container">
                {data.foods.map( (food, index) => <FoodBox key={index} index={index} food={food} quantity={data.quantity} handleChange={handleChange} /> )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;