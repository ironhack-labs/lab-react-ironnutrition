import React, { Component } from 'react';
import foods from './foods.json'
import './App.css';
import './index.css'
import FoodBox from './FoodBox';
import Form from './Form.js';
import Search from './Search';
import 'bulma/css/bulma.css';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        list: foods,
        showPopup: false
    }
    
} 
  
  togglePopup = (food) => {  
  this.setState({  
       showPopup: !this.state.showPopup  
  }); 
  if(food.name !== undefined){
    this.addFood(food);
  } 
   }

   
  addFood = (food) => {
   let newFoods = [...this.state.list]
    newFoods.unshift(food) 
    console.log(newFoods)
    this.setState({
    list: newFoods
         })
         console.log(this.state, this.props)
      }



showFood = () =>{
  return this.state.list.map((eachFood,i)=>{
      return(
      <FoodBox key={i} {...eachFood}/>
      )
  })
}


render() {

   return (
      <div>
      <h1 className="title">IronNutrition</h1>
      <Search/>
      <button onClick={this.togglePopup}>Add new Food </button>
      {this.state.showPopup ?  <Form  closePopup={(food) => this.togglePopup(food)}/> 
         : null }  
     {this.showFood()}
      </div>
    );
  }

}
export default App;
