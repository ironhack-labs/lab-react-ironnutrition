import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox/FoodBox'
import AddFood from './components/AddFood/AddFood'
import Searchbar from './components/Searchbar/Searchbar'

class App extends Component {

  state = {
    allFoods: foods,
    showForm: false,
  }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm  })
  }
  
  addNewFood = (newFood) => {
    const newAllFoods = [newFood, ...this.state.allFoods];    
    this.setState({ allFoods: newAllFoods });
  }

  handleSearch = (input) => {
    const searchedFoods = this.state.allFoods.filter( (singleFood) => {
      if(singleFood.name.includes(input)) {
        return true
      } else {
        return false
      }
    })

    this.setState({allFoods: searchedFoods})
  }

  render() {
    return (
      <div className="App">
          <header className="App-header">
            <p  className="has-text-centered is-size-1 m-5">Iron Nutrition</p>
          </header>

          <main className="container is-fluid">

            <button className="button is-rounded is-dark" onClick={this.toggleForm}>
              {this.state.showForm ? "Hide Form" : "Show Form" }
            </button>

            { this.state.showForm && <AddFood addFood={this.addNewFood}/> }

            <Searchbar />

            {this.state.allFoods.map((food) => {
              return(
                <FoodBox 
                  key={food.name + food.calories} 
                  name={food.name} 
                  calories={food.calories} 
                  image={food.image} 
                />
              )
            })}
          </main>
      </div>
    );
  }
}

export default App;
