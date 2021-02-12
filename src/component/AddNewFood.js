import React, { Component } from 'react';

 // cuando presiona el boton se abre el formulario
class AddNewFood extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      name: '',
      calories: '',
      image: URL,
      quantity: ''
    }


  }
  

  handleName = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleCalories = (event) => {
    this.setState({
      calories: event.target.value
    })
  }

  handleImage = (event) => {
    this.setState({
      image: event.target.value
    })
  }

  handleQuantity = (event) => {
    this.setState({
      quantity: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleName(e)} />

          <label>Calories:</label>
          <input type="text" name="calories" value={this.state.calories} onChange={(e) => this.handleCalories(e)} />

          <label>Image:</label>
          <input type="file"  name="image" checked={this.state.image} onChange={(e) => this.handleImage(e)} />

          <label>Quantity:</label>
          <input type="text" name="quantity" value={this.state.quantity} onChange={(e) => this.handleQuantity(e)} />
            
          <button>Submit</button>
        </form>
    </div>
    )
  }

}
export default AddNewFood;
