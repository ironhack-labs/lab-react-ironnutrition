import React, { Component } from "react";
import { Redirect } from 'react-router'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      calories: "",
      image: "",
      quantity: 0
    };
  }

  handleFormSubmit = e => {
      e.preventDefault()
      console.log(this.props)
      this.props.includesFood(this.state)
      return <Redirect to='/' />
  }

  handleChange = e => {
      let {name, value} = e.target
      this.setState({[name]: value})
  }

  render() {
    return (
      <form onSubmit = {this.handleFormSubmit} >
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              name="name"
              id="input1"
              className="input"
              type="text"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Calories</label>
          <div className="control">
            <input
              name="calories"
              id="input2"
              className="input"
              type="number"
              placeholder="calories"
              value={this.state.calories}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Image</label>
          <div className="control">
            <input
              name="image"
              id="input3"
              className="input"
              type="text"
              placeholder="url"
              value={this.state.image}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Quantity</label>
          <div className="control">
            <input
              name="quantity"
              id="input4"
              className="input"
              type="number"
              placeholder="quantity"
              value={this.state.quantity}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <button type="submit">submit</button>
      </form>
    );
  }
}
export default Form