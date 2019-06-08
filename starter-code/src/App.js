import React, { Component } from 'react';
import './App.css';
import foods from './constants/foods.json';
import FoodBox from '../src/components/FoodBox';
import 'bulma/css/bulma.css';
import AddFood from './components/AddFood';
import AddFoodButton from './components/AddFoodButton';
import Search from './components/Search';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      foods: foods,
      allFoods: foods,
      addFood: true,
      todaysFoods: '',
    }

    this.addFoodHandler = this.addFoodHandler.bind(this);
    this.addButtonHandler = this.addButtonHandler.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  addButtonHandler () {
    this.setState({
      addFood: false,
    })
  }

  addFoodHandler (theFood) {
    const { name, calories, image, addFood } = theFood;
    const food = {
      name: name,
      calories: calories,
      image: image,
    }
    const foodsCopy = [...this.state.allFoods];
    foodsCopy.push(food);
    this.setState({
      foods: foodsCopy,
      allFoods: foodsCopy,
      addFood: addFood,
    })
  }

  handleSearch (text) {
    const foods = this.state.foods;

    if (text !== '') {
      const filteredFoods = foods.filter(e => {
        return e.name.toUpperCase().indexOf(text.toUpperCase()) > -1;
      })
      this.setState({ foods: filteredFoods })
    } else {
      this.setState({ foods: this.state.allFoods });
    }
  }

  render() {
    const foods = this.state.foods;
    return (
      <React.Fragment>
        <header>
          <Search search={this.handleSearch} />
          {
            (!this.state.addFood) ? <AddFood addTheFood={this.addFoodHandler}/> : <AddFoodButton addButton={this.addButtonHandler}/>
          }
        </header>
        {
          foods.map((food, index) => {
            return <FoodBox 
            image={food.image} 
            name={food.name} 
            calories={food.calories} 
            key={index}
            />
          })
        }
      </React.Fragment>
    )
  }
}

export default App;
