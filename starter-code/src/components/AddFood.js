import React, { Component } from "react";
import "./AddFood.css";

class AddFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      calories: "",
      image: "",
      quantity: ""
    };
  }

  handleChange(event) {
    let { name, calories, image, quantity, value } = event.target;
    this.setState({
      [name]: value,
      [calories]: value,
      [image]: value,
      [quantity]: value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.addMyFood(this.state);
    this.setState({
      name: "",
      calories: "",
      image: "",
      quantity: ""
    });
  };

  render() {
    return (
      <div className="AddFood">
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Text input"
              name="name"
              value={this.state.name}
              onChange={e => this.handleChange(e)}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Calories</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="100"
              name="calories"
              value={this.state.calories}
              onChange={e => this.handleChange(e)}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Image</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="URL"
              name="image"
              value={this.state.image}
              onChange={e => this.handleChange(e)}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Quantity</label>
          <div className="control">
            <input
              className="input"
              type="number"
              name="quantity"
              value={this.state.quantity}
              onChange={e => this.handleChange(e)}
            />
          </div>
        </div>

        <div class="field is-grouped is-grouped-centered">
          <div class="control">
            <button
              class="button is-info"
              onClick={e => this.handleFormSubmit(e)}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddFood;
