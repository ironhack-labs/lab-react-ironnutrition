import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// CSS from bulma
import 'bulma/css/bulma.css';
// all available food objects
import foods from './foods.json';
import FoodBox from './components/FoodBox.js';

class App extends Component {

  constructor(props){
    super(props);
    console.log("Number of foods: "+foods.length);
    this._setQuantity=this._setQuantity.bind(this);
    this._addNewFood=this._addNewFood.bind(this);
    this._newFoodName=this._newFoodName.bind(this);
    this._newFoodCalories=this._newFoodCalories.bind(this);
    this._addToTodaysFoods=this._addToTodaysFoods.bind(this);
    this._newFoodImage=this._newFoodImage.bind(this);
    this._handleSearchChange=this._handleSearchChange.bind(this);
    this._removeTodaysFood=this._removeTodaysFood.bind(this);
    this.state={
      foods:foods,
      addingNewFood:false,
      newFoodName:"",
      newFoodCalories:0,
      newFoodImage:"",
      searchFor:"",
      caloriesTotal:0,
      todaysFoods:[]
    };
  }
  _handleSearchChange(event){
    this.setState({searchFor:event.target.value});
  }
  _getFoodIndex(name){
    let index=this.state.foods.length;
    while(--index>=0&&this.state.foods[index].name!==name);
    return index;
  }
  _removeTodaysFood(index){
    let todaysFoods=[...this.state.todaysFoods];
    let todaysFood=todaysFoods[index];
    let caloriesOut=todaysFood.calories;
    let newCaloriesTotal=this.state.caloriesTotal-caloriesOut;
    todaysFoods.splice(index,1);
    this.setState({todaysFoods:todaysFoods,caloriesTotal:newCaloriesTotal});
  }
  _addToTodaysFoods(name){
    let index=this._getFoodIndex(name);
    if(index<0){alert("Food '"+name+"' disappeared somehow!");return};
    let food=this.state.foods[index];
    let quantity=food.quantity;
    if(quantity<=0){alert("Please increment the quantity first!");return;}
    // it's easiest to complete rebuild todaysFoods
    let todaysFoods=this.state.todaysFoods.map((todaysFood)=>Object.assign({},todaysFood));
    let todaysFoodIndex=todaysFoods.length;
    while(--todaysFoodIndex>=0){
      let todaysFood=todaysFoods[todaysFoodIndex];
      // the name might be multiple words though
      if(todaysFood.name===food.name){
        let newQuantity=parseInt(todaysFood.count)+parseInt(food.quantity);
        todaysFoods[todaysFoodIndex]={count:newQuantity,name:food.name,calories:newQuantity*food.calories};
        break;
      }
    }
    if(todaysFoodIndex<0) // not present yet
      todaysFoods.push({count:food.quantity,name:food.name,calories:food.quantity*food.calories});
    let newCaloriesTotal=this.state.caloriesTotal+food.calories*food.quantity;
    this.setState({caloriesTotal:newCaloriesTotal,todaysFoods:todaysFoods});
  }
  _setQuantity(name,quantity){
    // a hack I found on stackoverflow (https://stackoverflow.com/questions/29537299/react-how-to-update-state-item1-in-state-using-setstate)
    let index=this._getFoodIndex(name);
    if(index<0){alert("Food '"+name+"' disappeared somehow!");return};
    let food=this.state.foods[index];
    // get the current quantity
    let quantitynow=Math.max(0,food.quantity);
    // we need to copy the food elements as well, so using the spread operator does not suffice
    let newfoods=this.state.foods.map((food)=>Object.assign({},food));
    newfoods[index].quantity=quantity;
    this.setState({foods:newfoods});
  }
  _newFoodName(event){this.setState({newFoodName:event.target.value});}
  _newFoodCalories(event){this.setState({newFoodCalories:parseInt(event.target.value)});}
  _newFoodImage(event){this.setState({newFoodImage:event.target.value});}
  _addNewFood(){
    // toggle the addNewFood
    if(this.state.addingNewFood){
      // if the input is not valid we will not add a food
      let newstate={addingNewFood:false};
      let newfood=null;
      if(this.state.newFoodName.trim().length>0&&typeof this.state.newFoodCalories==='number'&&this.state.newFoodCalories>0){
        newfood={name:this.state.newFoodName,calories:this.state.newFoodCalories,image:this.state.newFoodImage,quantity:0};
      }else
        alert("Invalid food specification!");
      if(newfood){
        console.log("New food",newfood);
        let newfoods=[...this.state.foods];
        newfoods.unshift(newfood);
        newstate.foods=newfoods;
        // clear the form input fields
        newstate.newFoodName="";
        newstate.newFoodCalories=0;
        newstate.newFoodImage="";
      }
      this.setState(newstate);
    }else{
      // we 'only' need to show the form
      this.setState({addingNewFood:true});  
    }
  }
  render() {
    return (
      <div className="App">
        <h1>IronNutrition</h1>
        {/* show todays foods */}
        <div className='App-todaysfoods'>
          <h2>Today's food</h2>
          <div class='columns'>
            {this.state.todaysFoods.map((todaysFood,index)=><div class='column'>{todaysFood.count} * {todaysFood.name} = {todaysFood.calories} Kcal<button onClick={()=>{this._removeTodaysFood(index)}}>Del</button></div>)}
          </div>
          <p>Total calories: {this.state.caloriesTotal} Kcal</p>
        </div>
        <div>
          Show only foods with <input type='text' value={this.state.search} onChange={this._handleSearchChange}></input> in their name.
        </div>
        <div>
          <button onClick={this._addNewFood} style={{display:this.state.addingNewFood?"none":"block"}}>Add new food</button>
          <div className="App-form" style={{display:this.state.addingNewFood?"block":"none"}}>
            <div>Instruction: Enter the name, calories and image file of a food to add.</div>
            <div>Name: <input type='text' value={this.state.newFoodName} onChange={this._newFoodName}></input></div>
            <div>Calories: <input type='number' value={this.state.newFoodCalories} onChange={this._newFoodCalories}></input></div>
            <div>Image file: <input type='text' value={this.state.newFoodImage} onChange={this._newFoodImage}></input></div>
            <button onClick={this._addNewFood}>Add</button>
          </div>
        </div>
        <h1>Available foods</h1>
        {
          this.state.foods
          .filter((food,index)=>food.name.toLowerCase().includes(this.state.searchFor.toLowerCase()))
          .map((food,index)=><FoodBox name={food.name} calories={food.calories} image={food.image} quantity={food.quantity} updateQuantity={this._setQuantity} addToTodaysFoods={this._addToTodaysFoods}></FoodBox>)
        }
      </div>
    );
  }

}

export default App;
