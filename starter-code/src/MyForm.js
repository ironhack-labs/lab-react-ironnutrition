import React, { Component } from "react";
import "bulma/css/bulma.css";

class MyForm extends Component {
  state = {
    name: "cesar",
    calories: 10,
    image: "",
    quantity: 0
  };

  updateForm(e, field) {
    this.setState({
      [field]: e.target.value
    });
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.addFood(this.state);
  }


  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            onChange={e => this.updateForm(e, "name")}
            placeholder="Name"
            value={this.state.name}
          />
          <input
            type="number"
            onChange={e => this.updateForm(e, "calories")}
            placeholder="Calories"
            value={this.state.calories}
          />
          <input
            type="text"
            onChange={e => this.updateForm(e, "image")}
            placeholder="Img URL"
            value={this.state.image}
          />
          <button onClick={e => this._handleSubmit(e)}>Add Food</button>
        </form>
      </div>
    );
  }
}

export default MyForm;
