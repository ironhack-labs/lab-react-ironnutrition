import React, { Component } from 'react';
import './App.css';
// import FoodBox from './FoodBox';

class NewButton extends Component{
  state = {
    //add array of foods to state
    // foods: foods,
    addFood: true,
    nameInput: '',
  }
   addNewFood = ()=>{
    this.setState({
      addFood: !this.state.addFood,
      //make copy of food array
    })
    console.log(this.state.addFood);
  }  
        
        // <form>
        // <input type='text' placeholder='add a food' />
        // <input type='text' placeholder='how many calories' />
        // <input type='text' placeholder='add an image URL' />
        // </form>
        
      
    // addForm = ()=>{
      // if(this.state.addFood = true){
      // return(
      //   <form>
      //   <input type='text' placeholder='add a food' />
      //   <input type='text' placeholder='how many calories' />
      //   <input type='text' placeholder='add an image URL' />
      //   </form>
      
      // )
      // }
    
      functionForAddingFood = (theEvent)=>{
        this.setState({nameInput: theEvent.target.value})
      }
    
      
    
  
  
render(){

if(this.state.addFood === false){
  return(
  <form>
        <input type='text' placeholder='add a food' value={this.state.nameInput} onChange={(nameInput)=>this.functionForAddingFood()} />
        <input type='text' placeholder='how many calories' />
        <input type='text' placeholder='add an image URL' />
        <input type='submit' placeholder='button' />
  </form>)
}
  // this is where i will add the form -- does it have to be equal to a variable?
  
 const btn = <button onClick={()=>this.addNewFood()}>Add new food</button>
  
  


  return(

   
    <div>{btn}</div>
    
    //i have to add an if statement that checks the state of addFood if it is true then add the form


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