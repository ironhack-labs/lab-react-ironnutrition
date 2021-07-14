import React, { Component } from "react"
import './Form.css'
import FoodList from "./FoodList"
class NewFoodForm extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            image: '',
            calories: '',
            quantity: ''
        }
    }
      
    
    handleInputChange = e => {
        const name = e.target.name  
        const value = e.target.value

        this.setState({
            [name]: value
        })
    }


    handleFormSubmit = e => {
        e.preventDefault()
        this.props.addFood(this.state)

        this.setState({
            name: '',
            image: '',
            calories: '',
            quantity: ''
        })
    }

    

   render() {
       return (
           <form className="new-food-form" onSubmit={this.handleFormSubmit}>

               <label>
                   Name: <input type="text" value={this.state.name} onChange={this.handleInputChange} name="name" />
               </label>

               <label>
                   Image: <input type="text" value={this.state.image} onChange={this.handleInputChange} name="image" />
               </label>

               <label>
                   Calories: <input type="text" value={this.state.calories} onChange={this.handleInputChange} name="calories" />
               </label>

               <label>
                   Quantity: <input type="number" value={this.state.quantity} onChange={this.handleInputChange} name="quantity" />
               </label>

               <input type="submit" value="Add food" />
           </form>
       )
   }
}

export default NewFoodForm
