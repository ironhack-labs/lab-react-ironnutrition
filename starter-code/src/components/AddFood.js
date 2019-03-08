import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import foods from '../foods.json'

class AddFood extends Component
{
  constructor(props) {
    super(props);
      this.state = {
        name: " ",
        calories: " ",
        image: " ",
        quantity: " "
    }
  }

  handleNameInput = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleCaloriesInput = (event) => {
    this.setState({
      calories: event.target.value
    })
  }

  handleImageInput = (event) => {
    this.setState({
      image: event.target.value
    })
  }

  handleQuantityInput = (event) => {
    this.setState({
      quantity: event.target.value
    })
  }

    // showForm = () => {
    //   if(!this.state.isHidden){
    //     return (
    //       <div>
    //         <form onSubmit={this.addFoodToList}/>
    //           <input name="food" placeholder="Add Product" />
    //           <input name="quantity" placeholder="Add Quantity" />
  
    //           <button>Submit</button>
    //       </div>
    //     )
    //   }
    // }
    
  render()
  {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>name:</label>
          <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleNameInput(e)}/>

          <label>calories:</label>
          <input type="text" name="calories" value={this.state.calories} onChange={(e) => this.handleCaloriesInput(e)}/>

          <label>image:</label>
          <input type="text" name="image" checked={this.state.image} onChange={(e) => this.handleImageInput(e)}/>
          
          <label>quantity:</label>
          <input type="text" name="quantity" value={this.state.quantiy} onChange={(e) => this.handleQuantityInput(e)}/>
          
          <input type="submit" value="Submit" />
      </form>
    </div>
    
    )
  }
}

export default AddFood;
