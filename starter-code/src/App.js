import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import FoodForm from './components/FoodForm';
import Search from './components/Search';
import './App.css';

class App extends Component {

  state = {
    foods : [],
    filteredFoods : [],
    showForm: false,
  }

  componentDidMount() {
    this.setState({ 
      foods : foods,
      filteredFoods: foods,
     });
  }

  showForm = () => {
    this.setState({showForm: true })
  }

  hideForm = () => {
    this.setState({ showForm: false });
  }

  addFood = (food) => {
    const { foods, filteredFoods } = this.state;
    foods.push(food);
    filteredFoods.push(food);
    this.setState({
      foods,
      filteredFoods,
    })
  }

  searchFood = (query) => {
    const { foods } = this.state;
    const filtered = foods.filter((food) => food.name.toLowerCase().includes(query));
    this.setState({
      filteredFoods: filtered,
    })
  }


  render() {
    const { filteredFoods } = this.state;
    return (
      <div className="App">
        <button onClick={this.showForm}>Add New Food</button>
        { this.state.showForm && <FoodForm hideForm={this.hideForm} addFood={this.addFood} /> }
        <Search filterFunc={this.searchFood}/>
        {
          filteredFoods.map((food,i) => (
            <FoodBox key={i} food={food} />
          ))
        }
      </div>
    );
  }
}

export default App;
