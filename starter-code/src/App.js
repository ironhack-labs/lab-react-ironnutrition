import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar.jsx';
import foods from './foods.json';
import Foodbox from './components/Foodbox.jsx';
import Todays from './components/Todays.jsx';

class App extends Component {
  state = {
    foods: foods,
    filteredFoods: foods
  }

  searchFood = (e) => {
    let searchTheFood = this.state.foods.filter((food) =>{
      return(
        food.name.toLowerCase().includes(e.target.value.toLowerCase())
      )})
    this.setState({ filteredFoods: searchTheFood });
  };

  addFood(indexN){
    var foodCopy = [...this.state.foods];
    foodCopy.push(indexN, 1);
    this.setState({foods: foodCopy});
    }

  render() {
    return (
      <div className="container">
          <Navbar />
          <div class="columns">
            <div class="column">
              <p class="bd-notification is-info">
              <h4 class="subtitle is-4">Search for food</h4>
              <input class="input" type="text" placeholder="Text input" onChange={this.searchFood}/>
              </p>
              <div class="columns is-mobile">
                <div class="column">
                  <p class="bd-notification is-info">
                      {this.state.filteredFoods.map((food, index) => (
                            <Foodbox
                                  key={index}
                                  key={`${food.name} - ${index}`}
                                  index={index.toString()}
                                  addFoodItem={this.addFood}
                                  foodItem={food}
                                  image={food.image}
                                  name={food.name}
                                  calories={food.calories}
                                  quantity={food.quantity}
                               />))}
                        </p>
                </div>
                <div class="column">
                <p class="bd-notification is-info">            
                <h5 class="subtitle is-5">Today's list</h5>
                  <p> {this.state.filteredFoods.map((food, index) => (
                    <Todays
                      key={index}
                      foodItem={food}
                    />
                    ))}
                    </p>
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
