import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      calories: '',
      image: ''
    }
  }

  handleInputChange = e => {
    let { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = e => {
    e.preventDefault()
    this.props.addFood(this.state)
    this.setState({
      name: '',
      calories: '',
      image: ''
    })
  }

  render() {

    return (
      <React.Fragment>

        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input onChange={this.handleInputChange} type="text" name="name" value={this.state.name} />
          <label>Calories:</label>
          <input onChange={this.handleInputChange} type="number" name="calories" value={this.state.calories} />
          <label>Image:</label>
          <input onChange={this.handleInputChange} type="text" name="image" value={this.state.image} />

          <input type="submit" value="Submit" />
        </form>




      </React.Fragment>
    )
  }
}

export default Form