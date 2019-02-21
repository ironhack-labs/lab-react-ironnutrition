import React, { Component } from "react";
import "./FoodBox.css";
import "bulma/css/bulma.css";

class FormAddFood extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      calories: "",
      image: ""
    };
  }
  genericOnChange(event) {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    // prevent the default page refresh you get when you submit a form
    event.preventDefault();
    // save the new movie info (this.state) in the array
    // movieSubmit is the method PROP sent to us by MovieList
    this.props.foodSubmit(this.state);

    // clear the form by setting the state back to initial values
    // REMEMBER to use set state
    this.setState({
      // copy paste the inital state
      name: "",
      calories: "",
      image: ""
    });
  }

  render() {
    return (
      <section className="AddFood">
        <form onSubmit={event => this.handleSubmit(event)}>
          <label>
            Name:
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.name}
              type="text"
              name="name"
              placeholder="Porridge"
            />
          </label>

          <label>
            Calories:
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.calories}
              type="number"
              name="calories"
              placeholder="100"
            />
          </label>

          <label>
            Image:
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.image}
              type="text"
              name="image"
              placeholder="image"
            />
          </label>
          <button onClick={() => this.props.showForm()}>Submit</button>
        </form>
      </section>
    );
  }
}

export default FormAddFood;
