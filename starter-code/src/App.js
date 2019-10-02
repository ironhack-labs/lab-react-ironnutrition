import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import NewFood from './components/NewFood';
import Search from './components/Search';
import TodaysFood from './components/TodaysFood';

class App extends Component {

  state = {
    allFoods: foods,
    newFoodClicked: false,
    displayFoods: foods,
    totalCal: 0,
    chosenFoods: []

  }


// Calculate total number of calroies and save array for todays foods that are chosen
calculateTotal = () => {

    let total = 0;
    for(let i=0; i<this.state.allFoods.length; i++){
      
        if(this.state.allFoods[i].quantity > 0){
          
          this.state.chosenFoods.push({
            chosen: this.state.allFoods[i].name,
            num: this.state.allFoods[i].quantity,
            cal: this.state.allFoods[i].calories * this.state.allFoods[i].quantity
          })

          total += this.state.allFoods[i].quantity*this.state.allFoods[i].calories;
        }
    }
 
    this.setState({
        totalCal: total
    })

}




  // Show list of foods
  displayFoods = () => {
    let foodInfo = this.state.displayFoods.map((eachFood, i) => {
      return <FoodBox calculateTotal={this.calculateTotal} food={eachFood} key={i} />;
    })
    return foodInfo;
  }



  
  // Check if 'Add new food' is clicked
  toggleNewFoodForm = () => {
    this.setState({
      newFoodClicked: !this.state.newFoodClicked
    })
  }




  // Show / Hide new food form
  addNewFood = () => {
    if (this.state.newFoodClicked) {
      return <NewFood addGoodFood={this.addGoodFood} />;
    }
  }




    // Add food to list
    addGoodFood = (goodFood) => {
      this.state.allFoods.push(goodFood)
      this.setState({
        newFoodClicked: !this.state.newFoodClicked,
      })
    }




  // Set the state to the filtered foods from Search
  showSearch = (filteredFoods) => {
    this.setState({
      displayFoods: filteredFoods
    })
  }

  

  render() {
    return (
      <div className="App">
        <Search showSearch={this.showSearch} foods={this.state.displayFoods} />
        <div>
          <div className='list-of-foods'>
            {this.displayFoods()}
          </div>
          <div>
          <TodaysFood totalCal={this.state.totalCal} chosenList = {this.state.chosenFoods}/>
          </div>
        </div>

        <div className='add-new-food'>
          <div>
            <button className='add-food-button' onClick={this.toggleNewFoodForm}>Add new food</button>
          </div>
          <div>
            {this.addNewFood()}
          </div>

        </div>
      </div>
    );
  }
}

export default App;
