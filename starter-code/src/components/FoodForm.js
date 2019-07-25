import React, { Component } from 'react';

class FoodForm extends Component {

  constructor(props){
    super(props);

    this.state = { 
      name: '',
      calories: '',
      image: '',
      quantity: 1,
    }
}

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.addFood(this.state);
    this.setState({     
      name: '',
      calories: 0,
      image: '',
      quantity: 1,
    })     
  }

  handleChange(event) {
    
    let { name, value } = event.target;

    this.setState({[name]: value});
  }

  render() {
    
    return(
      <div className="foodForm">
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
          
          <label>Calories:</label>
          <input type="number" name="calories" value={this.state.calories} onChange={(e) => this.handleChange(e)} />
          
          <label>Image url:</label>
          <input type="text" name="image" checked={this.state.image} onChange={(e) => this.handleChange(e)} />
          
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }

}

export default FoodForm;