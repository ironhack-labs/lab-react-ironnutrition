import 'bulma/css/bulma.css';
import React, { Component } from 'react';
import './App.css';
import FoodBoxContainer from './component/foodBoxContainer';
import FoodForm from './component/foodForm';
import foods from './foods.json';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      foods,
      formOpen: false,
      search: '',
    };
  }

  showFoodForm() {
    this.setState({ formOpen: true })
  };

  addFood(food) {
    const newFoods = [...this.state.foods, food];
    this.setState({ foods: newFoods, formOpen: false });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const formOpen = this.state.formOpen;
    const search = this.state.search;
    const foods = this.state.foods.filter(food => food.name.toLowerCase().indexOf(search.toLowerCase()) > -1);
    return (
      <div className="App">
        <div className='body'>
          <div className='btn-div'>
            {
              formOpen ?
                <FoodForm addFood={(food) => this.addFood(food)} /> :
                <button onClick={() => this.showFoodForm()}>Add food</button>
            }
          </div>
          <input className='input' type='text' name='search' value={search} onChange={(e) => this.handleChange(e)} placeholder='Search food item...' />
          <FoodBoxContainer foods={foods} />
        </div>
      </div>
    );
  }
}

export default App;