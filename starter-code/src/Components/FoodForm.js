import React, { Component } from "react";

class FoodForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      calories: "",
      image: "",
      quantity: "",
    }
  }

  genericSynchronize(event) {
    const { name, value } = event.target;

    this.setState({[name]: value});
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.addNewFood(this.state);

    this.setState ({
      name: "",
      calories: "",
      image: "",
      quantity: "",
    })

    const { showForm } = this.state;

    this.setState({showForm: false})
  }

  render() {

    return(
      <section>
        <form onSubmit={event => this.handleSubmit(event)}>
          <label>
            Name: <input value = {this.state.name} onChange={event => this.genericSynchronize(event)} name="name" type="text" placeholder="tomato"  />
          </label>

          <label>
            Calories: <input value = {this.state.calories} onChange={event => this.genericSynchronize(event)} name="calories" type="number" placeholder="300"  />
          </label>

          <label>
            Image: <input value = {this.state.image} onChange={event => this.genericSynchronize(event)} name="image" type="text" placeholder="Put the url of your image"  />
          </label>

          <label>
            Quantity: <input value = {this.state.quantity} onChange={event => this.genericSynchronize(event)} name="quantity" type="number" placeholder="Quantity of food"  />
          </label>

          <button>Save this food</button>
        </form>
      </section>
    )
  }
}

export default FoodForm;