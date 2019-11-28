import React, { Component } from "react";

class FormAddFoodBox extends Component {
  state = {
    infos: { image: "", name: "", calories: "" }
  };

  handleChange = e => {
    const copy = { ...this.state.infos };
    copy[e.target.name] = e.target.value;
    this.setState({ infos: copy });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.clbk(this.state.infos);
  };

  render() {
    return (
      <form
        className="addFoodBox"
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      >
        <label className="label" htmlFor="image">
          Image
        </label>
        <input className="input" id="image" name="image" type="text" />
        <label className="label" htmlFor="name">
          Name
        </label>
        <input className="input" id="name" name="name" type="text" />
        <label className="label" htmlFor="calories">
          Number of calories
        </label>
        <input className="input" id="calories" name="calories" type="text" />
        <button className="submit">Submit</button>
      </form>
    );
  }
}

export default FormAddFoodBox;
