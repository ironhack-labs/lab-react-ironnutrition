import React, { Component } from "react";

class AddNewFood extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      image: "",
      calories: ""
     
    };
  }

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.includeFood(this.state);
  };

  handleNameChange = e => this.setState({ name: e.target.value });
  handleCaloriesChange = e => this.setState({ calories: e.target.value });
  handleImageChange = e => this.setState({ image: e.target.value });

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="input1">Name</label>
          <input
            name="name"
            type="text"
            className="form-control"
            id="input1"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="input2">Calories</label>
          <input
            name="calories"
            type="number"
            className="form-control"
            id="input2"
            value={this.state.calories}
            onChange={this.handleCaloriesChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="input3">Image</label>
          <input
            name="image"
            type="text"
            className="form-control"
            id="input3"
            value={this.state.image}
            onChange={this.handleImageChange}
          />
        </div>
        <button type="submit" className="btn btn-dark">
          Crear
        </button>
      </form>
    );
  }
}

export default AddNewFood;
