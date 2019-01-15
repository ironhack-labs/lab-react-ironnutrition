import React, { Component } from "react";
import FormField from "./FormField.js";
import CoolButton from "./CoolButton.js";

class AddFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      calories: "",
      image: ""
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleNameInput = event => {
    this.setState({
      name: event.target.value
    });
  };
  handleCaloriesInput = event => {
    this.setState({
      calories: event.target.value
    });
  };
  handleImageInput = event => {
    this.setState({
      image: event.target.value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    this.props.addfoods(this.state);

    this.setState({
      name: "",
      calories: "",
      image: ""
    });
    this.props.toggle();
  };
  render() {
    return (
      <div>
        <FormField
          label="name"
          value={this.state.name}
          name="name"
          type="text"
          placeholder="churros"
          inputchange={e => this.handleNameInput(e)}
        />
        <FormField
          label="calories"
          value={this.state.calories}
          name="calories"
          type="text"
          placeholder="2000 "
          inputchange={e => this.handleCaloriesInput(e)}
        />
        <FormField
          label="image"
          value={this.state.image}
          name="image"
          type="text"
          placeholder="https://churros.com.churros.jpg"
          inputchange={e => this.handleImageInput(e)}
        />
        <CoolButton
          className="button is-small is-success"
          click={this.handleFormSubmit}
        >
          Create
        </CoolButton>
      </div>
    );
  }
}
export default AddFood;
