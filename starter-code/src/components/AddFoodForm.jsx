import React, { Component } from "react";

export default class AddFoodForm extends Component {
  state = {
    name: "",
    calories: 0,
    image: "",
    quantity: 0
  };

  handleInput = e => {
    let { name, value, type } = e.target;
    if (type === "file") {
      const file = new FileReader();
      file.readAsDataURL(e.target.files[0]);
      file.addEventListener("loadend", e => {
        this.setState({
          image: file.result
        });
      });
    } else {
      this.setState({
        [name]: value
      });
    }
  };

  submitForm = e => {
    e.preventDefault();
    this.props.addFood(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm} onChange={this.handleInput}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" name="name" placeholder="Type ingredient name" />
            </div>
          </div>
          <div className="field">
            <label className="label">Calories</label>
            <div className="control">
              <input className="input" type="number" name="calories" placeholder="Type calories" />
            </div>
          </div>
          <div className="field">
            <label className="label">Picture</label>
            <div className="control">
              <input className="input" type="file" name="image" />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-link">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
