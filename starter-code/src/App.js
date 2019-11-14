import React, { Component } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/food-box-component/food-box';
import NewFood from './components/new-food-component/new-food';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodList: foods,
      foodListClone: foods,
      showForm: false,
      showStyle:{'display':'none'},
      searchText:"",
      totalCal: 0,
      selectedFoods: []
    }
  }
  addSelectedFood = (food) => {
    let selectedFoods = [...this.state.selectedFoods];
    let checkDup = selectedFoods.filter(foodTemp => (foodTemp === food));
    if(checkDup.length > 0) {
      this.updateItem(food,++food.quantity);
    } else {
      selectedFoods.push(food);
      this.setState({
        selectedFoods:selectedFoods
      })
    }
    
    
  }
  updateItem = (food,quant) => {
   
    let foodCopy = [...this.state.selectedFoods];
    foodCopy.forEach(fc => {
      if(fc.name===food.name){
        fc.quantity = quant;
      }
    })
   this.setState({
     selectedFoods: foodCopy
   })
   this.calculateTotalCal(this.state.selectedFoods);
  }
  displayList = () => {
   return this.state.selectedFoods.map((food,index) => {
     return (
       <li key={index}>{food.quantity} {food.name} = {this.calculateCal(food.calories,food.quantity)} cal</li>
     )
   })
  }
  displayFoods = () => {
    return this.state.foodList.map((food, index) => {
     return (
       <FoodBox updateItem={this.updateItem} addSelectedFood={this.addSelectedFood} food = {food} key={index}/>
     );
    })
  }
  addNewFood = (newFood) => {
    let newList = [...this.state.foodList];
     newList.push(newFood);
     this.setState({
       foodList:newList,
       foodListClone: newList,
     })
  }
  addFood = () => {
    this.setState({
      showForm: !this.state.showForm,
    })
    if(this.state.showForm) {
      this.setState({
        showStyle:{'display':'block'}
      }) 
    } else {
      this.setState({
        showStyle:{'display':'none'}
      })
    }
  }
  search = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
    if(e.target.value.length > 0) {
      let filteredFoods = this.state.foodList.filter(food => (food.name.toLowerCase().includes(e.target.value.toLowerCase())));
      this.setState({
        foodList: filteredFoods
      })
    } else {
      this.setState({
        foodList: this.state.foodListClone
      })
    }
    
  }

  calculateCal = (cal,quant) => {
    return quant*cal;
  }

  calculateTotalCal = (list) => {
    if(this.state.selectedFoods.length > 0) {
      let totalCalories = 0;
      list.forEach((eachList)=>{
       totalCalories += this.calculateCal(eachList.calories,eachList.quantity);
      })
      this.setState({
        totalCal:totalCalories
      })
    }
   
  }

  displayTotal = () => {
    return (
      <p>{this.state.totalCal} cal</p>
    )
  }
  render() {
    return (
      <div className="main-content">
      <header className="sticky">
        <div className="heading">
          <h1>IRONNUTRITION</h1>
        </div>
        <div className="controls">
          <input type="text" 
             name="searchText"
             value={this.state.searchText}
             onChange={this.search} 
             className="search"
             placeholder="Search food"
             /> 
          <button className="add-food " onClick={this.addFood}>Add New Food</button>
        </div>
      </header>
      <div className="rest-content">
        <div style={this.state.showStyle}>
          <NewFood addNewFood = {this.addNewFood} addFood = {this.addFood} showForm={this.state.showForm} foodList={this.state.foodList}/>
        </div>
        <div className="food-content">
          <div className="food-boxes">
            {this.displayFoods()}
          </div>
          <div className="today-list">
          <div className="list-content">
            <h2>Today's Foods</h2>
            <div className="cal-disp">
                <div className="selected-list"><ul>{this.displayList()}</ul></div>
                <div className="total-cal-display">
                  <label>Total Calories: </label>
                  {this.displayTotal()}
                </div> 
            </div>
          </div>
          </div>
        </div>
      </div>
       
        <div id="overlay" style={this.state.showStyle}></div>
      </div>
    );
  }
}

export default App;
