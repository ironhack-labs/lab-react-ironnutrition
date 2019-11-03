import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import FoodForm from './components/FoodForm';
import Search from './components/Search';
import TodayFoods from './components/TodayFoods';
import './App.css';

class App extends Component {

  state = {
    foods : [],
    filteredFoods : [],
    showForm: false,
    todayFoods: [],
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

  addTodayFood = (food) => {
    const foodsCopy = [...this.state.todayFoods];
    if (foodsCopy.length === 0 && food.quantity > 0 ) {  
      foodsCopy.push(food)
    } else {
      const sameFoodIndex = foodsCopy.findIndex((el) => el.name === food.name);
      if ( sameFoodIndex === -1 && food.quantity > 0 ){
        foodsCopy.push(food);
      } else {
        foodsCopy[sameFoodIndex] = food;
      }
    }
    this.setState({
      todayFoods: foodsCopy,
    })
  }


  render() {
    const { filteredFoods, todayFoods } = this.state;
    return (
      <div className="App">
        <div style={{width: '50%'}}>
          <button onClick={this.showForm}>Add New Food</button>
          { this.state.showForm && <FoodForm hideForm={this.hideForm} addFood={this.addFood} /> }
          <Search filterFunc={this.searchFood}/>
          {
            filteredFoods.map((food,i) => (
              <FoodBox key={i} food={food} addToTodayFoods={this.addTodayFood} />
            ))
          }
        </div>
          { todayFoods.length > 0 &&
            <TodayFoods foods={this.state.todayFoods} />  
          }    
      </div>
    );
  }
}

export default App;
