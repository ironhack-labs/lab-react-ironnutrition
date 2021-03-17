import React, { Component } from 'react'

class FormAddFood extends Component {
  state = {
    name: "",
    calories: "",
    image: "",
    quantity: 0
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
  }

  handleSubmitForm = (event) => {
    event.preventDefault();
    this.props.handleAddBtn({
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
      quantity: this.state.quantity
    });

    this.setState({
      name: "",
      calories: "",
      image: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmitForm}>
        <h2>Add new food</h2>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name"/>
        </div>
        <div>
          <label htmlFor="calories">Number of calories</label>
          <input type="number" id="calories" name="calories"/>
        </div>
        <div>
          <label htmlFor="image">Image url</label>
          <input type="text" name="image" id="image" /> 
        </div>
        <button onClick={this.props.handleClick}>Add</button>
      </form>
    )
  }
}

export default FormAddFood;
