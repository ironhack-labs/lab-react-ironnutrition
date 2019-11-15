import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/SingleFoodBox';
import Popup from './components/PopupForm'; 
import TodaysFood from './components/todaysfood';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foods: foods, //call food.json
      filtered: foods,
      showPopup: false, //don't show popup
      todaysFood: []
    };
    // this.handleChange = this.handleChange.bind(this);
    // you dont need to do it like this if you define the function properly
  }
  togglePopup = (food) => {  //triggle and close popup window
    this.setState({  
         showPopup: !this.state.showPopup  //toggle to show popup
    });  
    if(food.name !== undefined) { //I notice that every time I click "addfood" button, it also submit empty box so I had to set conditions
      this.addFood(food) 
    }//call addFood function when you click to open the popup and I think that you submit the food to the array after you close
  }  

  handleChange =(e) => {
		// Variable to hold the original version of the list
    let currentList = [...this.state.foods];
		
		// If the search bar isn't empty
    // if (e.target.value !== "") {
			
			// Use .filter() to determine which items should be displayed
			// based on the search terms
      let newList = currentList.filter(item => {
				// change current item to lowercase
        const lc = item.name.toLowerCase();
        // item .tolowercase it not a function because item is an object

				// change search term to lowercase
        const filter = e.target.value.toLowerCase();
				// check to see if the current list item includes the search term
				// If it does, it will be added to newList. Using lowercase eliminates
				// issues with capitalization in search terms and search content
        return lc.includes(filter);
      });
    // } else {
			// If the search bar is empty, set newList to original task list
      // newList = this.props.items;
    // }
		// Set the filtered state based on what our rules added to newList
    this.setState({
      filtered: newList
    });
  }

  addFood = (food) => { //get food data


    let newFoodsList = [...this.state.foods] //create new array
    newFoodsList.unshift(food) //add it to food array
    this.setState({
      foods: newFoodsList,
      filtered: newFoodsList

    })
    console.log(this.state, this.props)
 }

  showFood = () =>{
    return this.state.filtered.map((eachFood,i)=>{
        return(
        <FoodBox
         key={i}
         theFood = {eachFood}
         addTodaysFoodMethod={this.addTodaysFood}
        //  i dont think you can pass in the argument here
        // you will have to pass int he argument when you call this function inside the FoodBox component
          />
        )
    })
  }
  // its cause that thing starts out as empty so youre not alllowed to do the [...] thing on it just start it as an empty array
  addTodaysFood = (foodItem, quantity) => {
    // console.log('its working!', foodItem, quantity)

    const copyTodayList = [...this.state.todaysFood]
    const food = {
      name: foodItem.name,
      calories: foodItem.calories,
      image: foodItem.image,
      quantity: quantity
    }
    let foodCaloriesSum = food.calories * quantity;
    food.calories = foodCaloriesSum;
    // document.getElementById('caloriesTotalID').innerHTML = foodCaloriesSum;
    const key = copyTodayList.map(e => e.name) // create an array with all food names from copyToday
    if (key.includes(food.name)) { // check if the current food is already in the list
      let index = key.indexOf(food.name);
      let quantityNumber = parseInt(copyTodayList[index].quantity);
      quantityNumber += parseInt(food.quantity);
      copyTodayList[index].quantity = quantityNumber;
      let caloriesNumber = copyTodayList[index].calories;
      // console.log("This is quantity number " + quantity);
      caloriesNumber += food.calories;
      copyTodayList[index].calories = caloriesNumber;
    // console.log('its working awesome!' + caloriesTotalSum);
    } else {
      copyTodayList.push(food);
      // showTotalCalories(copyTodayList);
    }
    const keycalories = copyTodayList.map(e => e.calories);
    let caloriesTotalSum = keycalories.reduce((total, num) => total + num);
    document.getElementById('caloriesTotalID').innerHTML = caloriesTotalSum;
    // console.log('its working awesome!' + keycalories);
    this.setState({ todaysFood: copyTodayList })
  }
  showTodayFood = () => {
    return this.state.todaysFood.map((eachtodayFood,i)=>{
      return(
        <TodaysFood key={i} index={i} thetodayFood = {eachtodayFood} deleteOneMethod={this.deleteFood} />
      )
    })
  }

  deleteFood = (theIndex) =>{
    let deleteList = [...this.state.todaysFood];
    // step 1 is to grab theinfo out of the state and clone it
    console.log("This is Index" + theIndex);
  
    deleteList.splice(theIndex, 1);
    // step 2 is to do wahtever you want to do to that thing and you can do it in regular javascript
  
    this.setState({todaysFood: deleteList})
    // step 3 is to take that thing you edited and use it to set the state
  }

  render() {
    return (
      <div className="App">
      <div className="container">
      <h1 className="title">IronNutrition</h1>
      <div>
      <input type="text" className="input search-bar" name="search" placeholder="Search..." onChange={this.handleChange} />
      </div>
      <button className="popupbtn button is-primary" onClick={this.togglePopup}>Add New Food</button>
      {this.state.showPopup ? <Popup closePopup={(food) => this.togglePopup(food)} />  //call the closePopup from PopupForm.js and get food data
        : null  } 
        <div className="columns">
          <div className="column">
            {this.showFood()}
          </div>
          <div className="column content">
          <h2>Today's foods</h2>
          <ul className="ulTodayFoodList">
            {this.showTodayFood()}
          </ul>
          <h5>Total calories <span id="caloriesTotalID">0</span></h5>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
