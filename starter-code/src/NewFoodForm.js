import React, { Component } from "react";

class NewFoodForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      calories: "",
      image: ""
    };
  }
  inputHandler(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }
  render() {
    const { name, calories, image } = this.state;
    return (
      <div className="form">
        <input type="text" name="name" placeholder="Food Name" value={name} onChange={e => this.inputHandler(e)} />
        <input type="number" name="calories" placeholder="Calories" value={calories} onChange={e => this.inputHandler(e)} />
        <input type="text" name="image" placeholder="Image Url" value={image} onChange={e => this.inputHandler(e)} />
        <button onClick={() => this.props.addAction({ name, calories, image })}>Add</button>
      </div>
    );
  }
}

export default NewFoodForm;
