import React, { Component } from "react";
import "../App.css";
import "bulma/css/bulma.css";

class AddFood extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      url: "",
      calories: ""
    };
  }

  handleNameInput = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleUrlInput = (event) => {
    this.setState({
      url: event.target.value
    })
  }

  handleCalories = (event) => {
    this.setState({
      calories: event.target.value
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.addTheFood(this.state);   
    this.setState({
      name: "",
      url: "",
      calories: "" 
    })  
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} />

          <label>Picture:</label>
          <input type="url" name="url" value={this.state.url} />

          <label>Calories:</label>
          <input type="text" name="calories" value={this.state.calories} />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddFood;