import React, { Component } from 'react';

class AddFood extends Component {
  state = {
    name: '',
    calories: 0,
    image: '',
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleFormSubmit = (event) => {
    //not see page reload
    event.preventDefault();
    const { name, image, calories } = this.state;
    // Push the new Food
    this.props.addTheFood({
      //if the key is equal to object we can use only one
      name: name,
      image: image,
      calories: calories,
    });

    this.setState({
      name: '',
      calories: 0,
      image: '',
    });
  };
  render() {
    const { name, calories, image } = this.state;
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name</label>
          <input
            className="input"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <label>Calories</label>
          <input
            className="input"
            type="text"
            name="calories"
            value={calories}
            onChange={this.handleChange}
          />
          <label>Image</label>
          <input
            className="input"
            type="text"
            name="image"
            value={image}
            onChange={this.handleChange}
          />
          <button className="button">
            Add Food
          </button>
        </form>
      </div>
    );
  }
}

export default AddFood;
