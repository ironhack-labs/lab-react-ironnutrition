import React, { Component } from 'react';

import 'bulma/css/bulma.css'
import './App.css';

import FoodBox from './Components/FoodBox';
import foods from './foods.json';
import Form from './Components/Form';
import SearchBox from './Components/SearchBox';
import TodaysFoods from './Components/TodayFoods';

class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
        
          quantity: 0,
          allFoodList: foods,
          visibleFoodList: foods,
          name: "",
          calories: "",
          image: "",
          foodToSearch: "",
          todayList: [] 
      }
  }

  addToList = () => {
    console.log("Hello World!")
  }
      
  displayAllFoods = () => {
  
    return this.state.visibleFoodList.map((eachFood, index) => {
      return(
        < FoodBox
        key={index}
        theName= {eachFood.name}
        theCalories={eachFood.calories}
        theImage={eachFood.image}
        todayStuff={this.addToList}
        sendToday={this.addToday}
        />
      )
    })
  }

  addToday = (foodItem) => {
    console.log('working');
    
    console.log("foodItem: ", foodItem);
    console.log("chooseOne.theName: ", foodItem.props.theName);
    console.log("chooseOne.theCalories: ", foodItem.props.theCalories);
    console.log("chooseOne.theImage: ", foodItem.props.theImage);

    let newTodayFood = {name: foodItem.props.theName, calories: foodItem.props.theCalories}
    console.log("newTodayFood", newTodayFood)
    let newTodayList = [...this.state.todayList]
    newTodayList.push(newTodayFood);

    this.setState({
      todayList: newTodayList
    })
  }

  showTodaySpecials = () => {
    return this.state.todayList.map((eachTodayFood, index) => {
      console.log("eachTodayFood: ", eachTodayFood)
      return <li key={index}> {eachTodayFood.name}  {eachTodayFood.calories} Calories</li>
    })
  }

  addFoodItem = (theFoodItem) => {
    const foodListCopy = [...this.state.allFoodList];
    foodListCopy.unshift(theFoodItem);
    this.setState({
      visibleFoodList : foodListCopy,
      allFoodList: foodListCopy
    })
  }

  searchFood = (e) => {
    console.log(e.currentTarget.value)

    this.setState({foodToSearch: e.currentTarget.value}, () => {


      let filterListFoods = this.state.allFoodList.filter((eachFood) => {
      return eachFood.name.toLowerCase().includes(this.state.foodToSearch.toLowerCase())

    })

        this.setState({visibleFoodList: filterListFoods})

    })
    
  }
    

  render() {

   
      
        return (
          
          <div>

              <div>
                <SearchBox searchTheFood={this.searchFood} />
              </div>

              <div className="theForm">
                <Form addTheFood={this.addFoodItem}/>
              </div>

              <div className="food-list">
                <h2 className="title">Food List</h2>
                {this.displayAllFoods()}
              </div>

              <div>
                <TodaysFoods todaySpecial={this.showTodaySpecials()} />
              </div>

          </div>

        
        
        );

 

  }
}

export default App;
