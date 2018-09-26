import React, { Component } from 'react';
import './App.css';


class AddFood extends Component {


  constructor(props){
    super(props)
    this.state = {
      // foods: foods, 
      foodNameInput: "",
      caloriesInput: "",
    }
  }


  handleCaloriesChange = (e) =>{
    this.setState({caloriesInput:e.target.value})
    }
    
    handleNameChange = (e) => {
    this.setState({foodNameInput:e.target.value})
    }
    
    
    addNewFood = (e) => {
      e.preventtDefault();
      console.log(this.state);
      const newFod = {
        name: this.state.foodNameInput,
        calories: this.state.caloriesInput,
      }
    }




  render() {
    return (


      <form className="addFoodForm">

      <div className="title">Add a New Food</div>
      
      <label>Name</label>
      <input type="text" value={this.state.foodNameInput} onChange={e=> this.handleNameChange(e)} />
      
      <label>Calories</label>
      <input type="number" value={this.state.caloriesInput} onChange={e=> this.handleCaloriesChange(e)} />
      
      
      
      <button onClick={()=> this.addNewFood()}  className="button is-info">Submit</button>
      
            </form>
       

    );
  }
}

export default AddFood;