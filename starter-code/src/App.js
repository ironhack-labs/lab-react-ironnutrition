import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import FoodBox from './components/foods';
import FoodForm from './components/forms';
import Button from './components/button';
import SearchBar from './components/searchBar';
import TodayList from './components/todayList';
import foods from './foods.json'

class App extends Component {
constructor (props){
    super(props);

    this.state = {
      form:false,
      foodsList: foods,
      searchFood: foods,
      today: [],
      totalCalories: 0,
    };
  };

  appearHideForm = () => {
    this.setState({
      form:true
    })
  };

  addFood = (newFood) => {
    const stateCopy = [...this.state.foodsList];

    stateCopy.push(newFood);

    this.setState({
      foodsList: stateCopy,
    });
  };

  searchFood = (event) => {
    const stateCopy = [...this.state.foodsList];
    const newArr = [];
    
    stateCopy.forEach(element =>{
      if(element.name.includes(event)){
        newArr.push(element);
      };
    });

    this.setState({
      searchFood: newArr,
    });
  };

  todaysFood = (event) => {
    const stateCopy = [...this.state.today];
    const caloriesCopy = this.state.totalCalories;
    stateCopy.push(event);
    this.setState({
      today:stateCopy,
      totalCalories: caloriesCopy + event.calories
    });
  };

  render() {
    return (
      <div>
        <h1>IronNutricion</h1>

        <SearchBar searchFood={this.searchFood} />
        {this.state.form ? <FoodForm addFood={this.addFood}/> : <Button onClick={this.appearHideForm}>Add Food</Button>}
        <div className='main-container'>
          <div>
            {
              this.state.searchFood.map((element,index) => 
                <FoodBox key={index} todaysFood={this.todaysFood} name={element.name} calories={element.calories} img={element.image} quantity={element.quantity}/>
              )
            }
          </div>
          <div>
            <h2>Today's Food:</h2>
            <ul>
              {
                this.state.today.map((element,index) => 
                  <TodayList key={index} name={element.name} calories={element.calories} quantity={element.quantity}/>
                )
              }
            </ul>
            <p>
             Total: {this.state.totalCalories} cal
            </p>
          </div>
        </div>
      </div>
    );
  };
};

export default App;
