import React, { Component } from "react";

class AddFood extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibility: true,
      name: "",
      calories: "",
      image: ""
    };
  }

  showForm = () => {
    if (this.state.visibility === true) {
      this.setState({
        visibility: false
      });
    } else {
      this.setState({
        visibility: true
      });
    }
  };

  handleChange = event => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const newFood = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image
    };
    this.props.addFood(newFood);
    this.setState({
      visibility: false,
      name: "",
      calories: "",
      image: ""
    });
  };

  render() {
    if (this.state.visibility === true) {
      return (
        <div>
          <div className="container">
            <div className="addButton">
              <button className="button is-link" onClick={this.showForm}>
                Add Food
              </button>
            </div>
            <form onSubmit={this.handleFormSubmit}>
              <label>Food:</label>
              <input
                type="text"
                name="name"
                value={this.state.food}
                onChange={e => this.handleChange(e)}
              />

              <label>Calories:</label>
              <input
                type="number"
                name="calories"
                value={this.state.calories}
                onChange={e => this.handleChange(e)}
              />

              <label>Image:</label>
              <input
                type="text"
                name="image"
                checked={this.state.image}
                onChange={e => this.handleChange(e)}
              />

              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <div className="addButton">
          <button className="button is-link" onClick={this.showForm}>
            Add Food
          </button>
        </div>
      );
    }
  }
}

export default AddFood;
