import React, { Component } from "react";
import 'bulma/css/bulma.css';

class FormFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      calories: "",
      image: ""
    };
  }

  addFood = (event) => {
      event.preventDefault();
      this.props.addFood(this.state);
      this.setState({
        name: "",
        calories: "",
        image: ""
      })
  }

  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addFood}>
          <label>name:</label>
          <input
            type='text'
            name='name'
            value={this.state.name}
            onChange={e => this.handleChange(e)}
          />

          <label>calories:</label>
          <input
            type='text'
            name='calories'
            value={this.state.calories}
            onChange={e => this.handleChange(e)}
          />

          <label>Imagen</label>
          <input
            type='text'
            name='image'
            checked={this.state.image}
            onChange={e => this.handleChange(e)}
          />

          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default FormFood;
