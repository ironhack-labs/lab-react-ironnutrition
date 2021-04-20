import React, { Component } from 'react';
import foods from '../foods.json';

export class FormFood extends Component {
  state = {
    name: '',
    numberOfCalories: 0,
    image: '',
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addFood({
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
    });
  };
  render() {
    return (
      <div className="container btn-primary colorform">
        <span>Cadastro de alimento</span>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              onChange={this.handleChange}
              value={this.state.name}
              id="name"
              type="text"
              name="name"
            />
          </div>
          <div>
            <label htmlFor="calories">Calories</label>
            <input
              type="number"
              name="calories"
              value={this.state.calories}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="image">Image</label>
            <input
              type="text"
              name="image"
              value={this.state.image}
              onChange={this.handleChange}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default FormFood;

// onClick={
//   () => this.props.handleChange(this.state.title, this.state.overview)
