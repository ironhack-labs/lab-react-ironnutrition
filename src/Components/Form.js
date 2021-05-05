import React, { Component } from 'react';

export default class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fields: {
        name: "",
        calories: "",
        image: "",
        quantity: "",
      },
    };
  }

  handleSubmit(event) {
    event.preventDefault();
      this.setState({
        name: "",
        calories: "",
        image: "",
        quantity: "",
        });
    }


  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: value,
      },
    });
  }

  render() {
    const { fields } = this.state;
    return (
      <form onSubmit={(e) => this.handleSubmit(e)} style={{ marginBottom: 50 }}>
        <div className="form-item">
          <label htmlFor="name">Name: </label>
          <input
            className="food-form"
            placeholder="Meal name.."
            type="text"
            name="name"
            value={fields.name}
            onChange={(e) => this.handleChange(e)}
          />
        </div>
        <div className="form-item">
          <label htmlFor="calories">Calories: </label>
          <input
            className="food-form"
            placeholder="Meal calories.."
            type="text"
            name="calories"
            value={fields.calories}
            onChange={(e) => this.handleChange(e)}
          />
        </div>
        <div className="form-item">
          <label htmlFor="image">Image: </label>
          <input
            className="food-form"
            type="image"
            name="image"
            value={fields.image}
            onChange={(e) => this.handleChange(e)}
          />
        </div>
        <div className="form-item">
          <label htmlFor="quantity">Quantity: </label>
          <input
            className="food-form"
            placeholder="Meal quantity.."
            type="text"
            name="quantity"
            value={fields.quantity}
            onChange={(e) => this.handleChange(e)}
          />
        </div>
        <button type="submit">Create Meal</button>
      </form>
    );
  }
}





