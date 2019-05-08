import React, { Component } from 'react';

class FormFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      calories: 0,
      image: '',
      quantity: 0,
    }
    this.inputChange = this.inputChange.bind(this);
    this.addForm = this.addForm.bind(this)
  }

  inputChange(event) {
    let { name, value } = event.target;
    this.setState({ [name]: value })
  }

  addForm() {
    event.preventDefault();
    this.props.addOneFood(this.state);   
    this.setState({
      name: '',
      calories: 0,
      image: '',
      quantity: 0 
    })
  }

  render() {
    return(
      <div className = "add-food">
      <form onSubmit={}>
          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={(e) => inputChange(e) } />

          <label>Calories:</label>
          <input type="number" name="calories" value={this.state.calories} onChange={(e) => inputChange(e) } />

          <label>Image (URL):</label>
          <input type="text" name="image" checked={this.state.image} onChange={(e) => inputChange(e) } />
          
          <label>Quantity:</label>
          <input type="number" name="quantity" value={this.state.quantity} onChange={(e) => inputChange(e) } />
          
          <input type="submit" value="Submit" />
      </form>
    </div>
    )
  }
}

export default FormFood;
