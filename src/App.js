import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
// import AddFoodButton from './components/AddFoodButton'
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import Todays from './components/Todays';


class App extends Component {
  state = {
    foods: foods,
    isFormOpen: false,
    filtered: foods,
    today: []
  };

  showFormHandler = (event) => {
    event.preventDefault();

    if(this.state.isFormOpen === false){
        this.setState({
            isFormOpen: true
        });
    }
  }

  closeFormHandler = () => {
    if(this.state.isFormOpen === true){
      this.setState({
          isFormOpen: false
      });
  }
  }


  addFoodHandler = (food) => {
    const foodsCopy = [...this.state.foods];

    foodsCopy.push(food);

    this.setState({
      foods: foodsCopy,
      filtered: foodsCopy
    })
  };

  filterFoodsHandler = (foodSearch) => {
    const filtered = this.state.foods.filter(food =>
      food.name.toLowerCase().includes(foodSearch.toLowerCase())
    );

    this.setState({ 
      filtered: filtered 
    });
  }

  todaysFoodsHandler = (foodName, quantity) => {
    const todayCopy = [...this.state.today];

    const filteredFood = this.state.foods.filter(food =>
      food.name.includes(foodName)
    );
    //console.log('filteredFood:', filteredFood)
    
    const todaysFood = filteredFood[0];
    //console.log('filtered food quantity update', filteredFood);
    
    if(todayCopy.includes(todaysFood)){
      console.log('adding food');
      todaysFood.quantity += quantity;
    } else{
      todaysFood.quantity = quantity;
      todayCopy.push(todaysFood);
    }

    this.setState({
      today: todayCopy
    })
    //console.log('todayCopy', todayCopy)
  }

  totalCalHandler = (obj) => {
    const totalCalPerFood = obj.map(item => item.calories* item.quantity);
    //console.log('Total calories per food', totalCalPerFood);

    const reduced = totalCalPerFood.reduce(function(a, c) {
      return a + c;
    }, 0)
  
    return reduced;
  };

  render(){
    return (
      <div className="App">
        <h1 className="title">IronNutrition</h1>
        <Search foodSearch={this.filterFoodsHandler} />

        <div className="columns">
          <div className="column">
            {this.state.filtered.map(food => {
              return <FoodBox key={food.name} todaysFoods={this.todaysFoodsHandler} {...food} />
            })}

            <button className='button is-info' onClick={this.showFormHandler}>Add new Food</button>

            {this.state.isFormOpen && <AddFoodForm addFood={this.addFoodHandler} closeForm={this.closeFormHandler} />}
            {/* <AddFoodButton addFood={this.addFoodHandler} /> */}
          </div>
          <div className="column aside">
            <h2>Today's foods</h2>
            <ul>
              {this.state.today.map(food => {
                return <Todays key={food.name} {...food} />
              })}
            </ul>
            <p>Total: {this.totalCalHandler(this.state.today)} cal</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
