import React, { Component } from 'react'

class AddFood extends Component {
    state = {
        name: "",
        calories: "",
        image: "",
        quantity: ""
    }
    

handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.addTheFood(this.state);
    this.setState({
        name: "",
        calories: "",
        image: "",
        quantity: ""
    })
}

handleChange = (event) => {
  let { name, value } = event.target;
  this.setState({ [name]: value})
}

render() {
  return (
    <div>
      <form onSubmit={this.handleFormSubmit}>
        <label>Name:</label>
        <input
          type='text'
          name='name'
          value={this.state.name}
          onChange={e => this.handleChange(e)}
        />

        <label>Carories:</label>
        <input
          type='number'
          name='calories'
          value={this.state.calories}
          onChange={e => this.handleChange(e)}
        />

        <label>Image:</label>
        <input
          type='text'
          name='image'
          value={this.state.image}
          onChange={e => this.handleChange(e)}
        />

        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}
}


export default AddFood
