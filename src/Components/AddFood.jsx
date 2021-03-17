import React, { Component } from 'react';

class AddFood extends Component {
  state = {
    name: '',
    calories: 0,
    image: '',
  };


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

  handleFormSubmit = (event) => {
    event.preventDefault();
    
    // Call the parent passed function
    this.props.addTheFood(this.state);
    
    // Reset
    this.setState({
        name: '',
        calories: 0,
        image: '', 
    })  
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name</label>
          <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleNameInput(e)}/>

          <label>Calories</label>
          <input type="text" name="calories" value={this.state.calories} onChange={(e) => this.handleCaloriesInput(e)} />

          <label>Image</label>
          <input
            type="text"
            name="image"
            checked={this.state.image} onChange={(e) => this.handleImageInput(e)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddFood;
