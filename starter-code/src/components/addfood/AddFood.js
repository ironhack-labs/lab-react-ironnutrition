import React, {Component} from 'react';
import './addfood.css'
import allTheFoods from "../../foods.json"



class AddFood extends Component{

    constructor(props){
        super(props)
        this.state = {
          allTheFoods: allTheFoods,
          formShowing: false, 
          newFoodName: "",
          newFoodImage: "", 
          newFoodCalories: ""
        }
    }



  updateInput = (e) => {
    // console.log('--------')
    // console.log(e.target.name);
    // console.log(e.target.value);
    this.setState({[e.target.name]: e.target.value})
  }

  addNewFood = (e)=>{
      e.preventDefault();

  }

    render(){
        return(
            <form className="add-new-food-form"
             onSubmit={this.addNewFood}>
            <div>
              <label>Name</label>
              <input 
              value={this.state.newName}
              onChange = {this.updateInput}
              name = "newFoodName"
               type="text" />
            </div>
            <div>
              <label>Calories</label>
              <input
              value={this.state.newCalories}
              onChange = {this.updateInput}
              name = "newFoodCalories"
               type="text" />
            </div>
            <div>
              <label>Image Url</label>
              <input 
              value={this.state.newImage}
              onChange = {this.updateInput}
              name = "newFoodImage"
              type="text" />
            </div>

            <button>Add Food</button>
          </form>
        )
    }





}

export default AddFood;