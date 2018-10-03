import React, { Component } from "react";
import "bulma/css/bulma.css";

class NewFoodForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      calories: "",
      image: "",
      error: ""
    };
  }

  handleSubmit() {
    let { name, calories, image, error } = this.state;
    if (name === "") return this.setState({ error: "Empty name" });
    if (calories === "") return this.setState({ error: "Empty calories" });
    if (image === "") return this.setState({ error: "Empty image" });

    console.log("FORM OK");
    this.setState({ error: "", name: "", calories: "", image: "" });
    this.props.foodReady({ name, calories, image });
  }

  render() {
    let { name, calories, image, error } = this.state;
    return (
      <div>
        <label>Food Name</label>
        <input
          type="text"
          value={name}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <label>Calories</label>
        <input
          type="text"
          value={calories}
          onChange={e => this.setState({ calories: e.target.value })}
        />
        <label>Image</label>
        <input
          type="text"
          value={image}
          onChange={e => this.setState({ image: e.target.value })}
        />
        <button onClick={this.handleSubmit.bind(this)}>Add food</button>
      </div>
    );
  }
}

export default NewFoodForm;
