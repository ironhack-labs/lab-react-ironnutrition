import React, { Component } from "react";

class AddFoodForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      calories: "",
      image: "",
      quantity: ""
    };
  }
  // form sync with current state
  syncStateForm(event) {
    const { value, name } = event.target;

    // check current form value
    //console.log(value);

    // dynamic object key name for differents input fields
    this.setState({ [name]: value });
  }

  // course method
  handleSubmit(event) {
    //prevent refresh
    event.preventDefault();

    // change component prop (which is linked to parent component and function)
    this.props.foodSubmitContent(this.state);
  }

  render() {
    return (
      <div>
        <form
          onSubmit={event => this.handleSubmit(event)}
          className="has-background-white-ter box"
        >
          <p>Suggest a meal below</p>

          <input
            name="name"
            onChange={event => this.syncStateForm(event)}
            className="input"
            type="text"
            placeholder="Yummy meal nickname* "
            required
          />
          <input
            name="calories"
            onChange={event => this.syncStateForm(event)}
            className="input"
            type="num"
            min="1"
            max="1"
            placeholder="Calories* (cal)"
            required
          />
          <input
            name="image"
            onChange={event => this.syncStateForm(event)}
            className="input"
            type="text"
            placeholder="Image URL *"
            required
          />

          <button className="button is-success">Add this meal</button>
        </form>
        <hr />
      </div>
    );
  } // end of render
}

export default AddFoodForm;
