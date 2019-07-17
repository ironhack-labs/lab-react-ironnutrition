import React from "react";

class AddFoodForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      image: "",
      calories: 0
    };
  }

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.pushFood(this.state);
    // clears the inputs again after the form has been submitted
    this.setState({
      name: "",
      image: "",
      calories: 0
    });
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />

        <label>Image:</label>
        <input
          type="text"
          name="image"
          value={this.state.image}
          onChange={this.handleChange}
        />

        <label>Calories:</label>
        <input
          type="number"
          name="calories"
          value={this.state.calories}
          onChange={this.handleChange}
        />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddFoodForm;
