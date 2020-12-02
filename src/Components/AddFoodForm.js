import React, { Component } from 'react';

class AddFoodForm extends Component {

    state = { 
        name: '',
        calories: '',
        image: '',
        quantity: undefined
      }

  handleChange = (event) => {
      const {name, value} = event.target
    this.setState({[name]:value})
  }
  
  render(){
    return (
        <div>
        <form onSubmit={this.handleFormSubmit}>
            <label>Name:</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
   
            <label>Calories:</label>
            <input type="text" name="calories" value={this.state.calories} onChange={this.handleChange} />
   
            <label>Image:</label>
            <input type="text" name="image" value={this.state.image} onChange={this.handleChange}/>
            
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default AddFoodForm;
