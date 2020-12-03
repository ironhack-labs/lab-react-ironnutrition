import React, { Component } from 'react';

class AddFood extends Component {
  // state for the form
  state = {
    foodname: '',
    calories: '',
    image: '',
    showForm: false, 
  };
  // methods to handle the input
  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  //method to handle the file upload
  
  // method to prevent default loading 
  handleSubmit = (event) =>{
    event.preventDefault(); 
    const newFood = this.state; 
    this.props.addFood(newFood); 
    this.setState({foodname: "", calories: "", image: ""});
  }

  toggleForm = () =>{
    const updatedShowForm = !this.state.showForm; 
    this.setState ({showForm : updatedShowForm})
  }


  render() {
    // true vs. false
    return (
      <div>
      <button onClick={this.toggleForm}>Show form to add food</button>
      {
      this.state.showForm 
        ? (<div>
      <form onSubmit={this.handleSubmit}>
      <label>Foodname: </label>
      <input
        type="text"
        name="foodname"
        value={this.state.name}
        onChange={this.handleInput}
      />
      <br />

      <label>Calories: </label>
      <input
        type="text"
        name="calories"
        value={this.state.calories}
        onChange={this.handleInput}
      />
      <br />

      <label>Image</label>
      <input
        type="text"
        name="image"
        value={this.state.image}
        onChange={this.handleInput}
      />
      <br />

      <button type="submit" onClick={this.toggleForm} > Add Food </button>
    </form>
        </div>)
        : null
    }
      </div>
    );
  }
}

export default AddFood;
