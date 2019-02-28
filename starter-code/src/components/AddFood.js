import React from "react";

class AddFood extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", calorie: 0, image: "" };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.addTheFood(this.state);
    this.setState({ name: "", calorie: 0, image: "" });
  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      [event.target.calories]: event.target.value,
      [event.target.image]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={e => this.handleChange(e)}
          />
          <label>Number of calories:</label>
          <input
            type="number"
            name="calories"
            value={this.state.calories}
            onChange={e => this.handleChange(e)}
          />
          <label>Image URL:</label>
          <input
            type="image"
            name="image"
            value={this.state.image}
            onChange={e => this.handleChange(e)}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddFood;
