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
  componentDidMount(){

  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addFood(this.state.fields);
      this.setState({
        fields: {
          name: '',
          calories: '',
          image: '',
          quantity: '',
        },
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
    const { name, calories, image, quantity} = this.state.fields;
    return (
      <form id="meal-form" className="meal-form" onSubmit={(e) => this.handleSubmit(e)} >
        <div className="form-item">
          <label htmlFor="name">Name: </label>
          <input
            className="food-form"
            placeholder="Meal name.."
            type="text"
            name="name"
            value={name}
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
            value={calories}
            onChange={(e) => this.handleChange(e)}
          />
        </div>
        <div className="form-item">
          <label htmlFor="image">Image: </label>
          <input
            className="food-form"
            type="text"
            name="image"
            value={image}
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
            value={quantity}
            onChange={(e) => this.handleChange(e)}
          />
        </div>
        <button className="button" type="submit">Create Meal</button>
      </form>
    );
  }
}





