import React, { Component } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './compnents/foodbox';
import TotalToday from './compnents/totalToday';
import TodayFoodItem from './compnents/todayFoodItem';

class App extends Component {
  constructor () {
    super();
    this.deleteToday = this.deleteToday.bind(this);
    this.addToday = this.addToday.bind(this);
    this.addFood = this.addFood.bind(this);
    this.filterFoods = this.filterFoods.bind(this);
    this.nameInputHandler = this.nameInputHandler.bind(this);
    this.caloriesInputHandler = this.caloriesInputHandler.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    
  } 
  state = {
    ironFoods: foods,
    todaysFoods:[],
    showingFoods: foods,
    hidden:true,
    tempFood: {
      name:"",
      calories:0,
      image:"https://i.imgur.com/eTuCPxM.jpg",
      quantity:0
    }
  }

  // Deletes one of the items in the today's foods list
  deleteToday (Ix){
    // debugger
    let tempTodayList = [...this.state.todaysFoods];
    tempTodayList.splice(Ix,1);
    this.setState({todaysFoods:tempTodayList});
  }

  // Adds food to the list
  addFood () {
    // debugger
    let tempFoodList = [...this.state.ironFoods];
    let tempShowingFoodList = [...this.state.showingFoods]
    tempFoodList.unshift(this.state.tempFood);
    tempShowingFoodList.unshift(this.state.tempFood);
    this.setState({ironFoods:tempFoodList, showingFoods:tempShowingFoodList});
    this.toggleForm();
  }

  // Adds an item to Today's food list
  addToday (Ix,qn) {
      // debugger
      let tempTodayList = [...this.state.todaysFoods];
      let foodExistsIx = tempTodayList.findIndex((food)=>{
        return (
          food.name.toLowerCase().includes(this.state.ironFoods[Ix].name.toLowerCase())
        )
      })
      if (foodExistsIx>-1) {
        tempTodayList[foodExistsIx].quantity = Number(tempTodayList[foodExistsIx].quantity)+Number(qn);
      } else {
        let tempTodayFoodItem = this.state.ironFoods[Ix];
        tempTodayFoodItem.quantity = qn;
        tempTodayList.unshift(tempTodayFoodItem);
      }
      
      this.setState({todaysFoods:tempTodayList});
  }

  // Filters the list based on the contents of the searchbar
  filterFoods (e) {
    let filteredFoodList = this.state.ironFoods.filter ((food)=>{
      return (
        food.name.toLowerCase().includes(e.target.value.toLowerCase()) 
      )
    })
    this.setState({showingFoods:filteredFoodList})
  }

  // Handles the changes in the name input field
  nameInputHandler(event){
    // debugger
    let foodCopy = {...this.state.tempFood};
    foodCopy.name = event.target.value;
    this.setState({
      tempFood: foodCopy
    })
  }

  // Handles the changes in the calories input field
  caloriesInputHandler(event){
    // debugger
    let foodCopy = {...this.state.tempFood};
    foodCopy.calories = Number(event.target.value)
    this.setState({
      tempFood: foodCopy
     })
  }

  // toggles add food form's visibility
  toggleForm(){
    this.setState({hidden: !this.state.hidden})
  }


  render() {
    let formClassName = this.state.hidden? "hidden": "show";
    let buttonClassName = this.state.hidden? "show": "hidden";
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IronNutrition</h1>
        </header>
        <div className="search-bar">
          <input type="text" name="search" placeholder="Search" onChange={this.filterFoods}/>
        </div>
        <section className="main">

          <div className={buttonClassName}>
            <button onClick={this.toggleForm}>Add new food</button>
          </div>
          <div className={formClassName}>
            <input type="text" onChange={this.nameInputHandler} name="name" placeholder="name"/>
            <input type="number" onChange={this.caloriesInputHandler} name="calories" placeholder="calories"/>
            <button onClick={this.addFood}>Add</button>
          </div>
          
          
          {this.state.showingFoods.map((item, index)=>
            <FoodBox
              key={`${item.name}-${index}`}
              foodItem={item} 
              addToday = {this.addToday}    
              index={index} 
            />)
          }
          <div className="total">
            <h2>Today's food</h2>
            <ul>
              {this.state.todaysFoods.map((item,index)=>
                <TodayFoodItem 
                  key={`${item.name}-${index}`}
                  foodItem = {item}
                  deleteFoodItem= {this.deleteToday}
                  index={index} 
                />
              )}
            </ul>

            <TotalToday foodList={this.state.todaysFoods}/>
              
          </div>   
        </section>
      </div>
    );
  }
}

export default App;
