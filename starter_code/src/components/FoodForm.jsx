import React, { Component } from 'react';

class FoodForm extends Component {
  state = { name: String(), calories: String(), image: String() };

  handleInputChange = field => e => this.setState({ [field]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    const { createFood } = this.props;
    createFood && createFood(this.state);
    this.setState({ name: String(), calories: String(), image: String() });
  };

  render() {
    const { name, calories, image } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label> Name: </label>
          <input type="text" onChange={this.handleInputChange('name')} placeholder="name" value={name} required />
        </div>
        <div className="form-group">
          <label> Calories: </label>
          <input
            type="text"
            onChange={this.handleInputChange('calories')}
            placeholder="calories"
            value={calories}
            required
          />
        </div>
        <div className="form-group">
          <label> Image URL: </label>
          <input type="text" onChange={this.handleInputChange('image')} placeholder="image" value={image} required />
        </div>
        <input type="submit" value="Create Food" />
      </form>
    );
  }
}

export default FoodForm;
