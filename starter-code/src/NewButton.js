import React, { Component } from 'react';
import './App.css';
// import FoodBox from './FoodBox';

class NewButton extends Component{
  state = {
    //add array of foods to state
    // foods: foods,
    addFood: false,
  }
   addNewFood = ()=>{
    this.setState({
      addFood: !this.state.addFood,
      //make copy of food array
    })
    console.log(this.state.addFood);
      
    }

  
render(){


  
  
 const btn = <button onClick={()=>this.addNewFood()}>Add new food</button>
  
  


  return(
    <div>{btn}</div>
    
    

  )
 
}
// render(){

//   // const form = `{
//   //   <form className='addFoodForm'>
//   //    <input type='text' name='addFoodField' placeholder='Food'></input>
//   //   </form>
   
//   //   }`
//   // return(
//   //   <div>{form}</div>


  
// }


}

export default NewButton;