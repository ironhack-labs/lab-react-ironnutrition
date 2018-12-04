import React, { Component } from "react";

export default class Button extends Component {
  constructor() {
    super();
    this.state = { form: false };
  }

  activateForm = () => {
    this.setState({ form: !this.state.form });
  };

  render() {
    let showForm;

    if (this.state.form) {
      showForm = (
        <form>
          <input type="text" name="namefood" value="Food" />
          <input type="text" name="calories" value="calories" />
          <input type="text" name="image" value="image" />
          <input type="submit" value="submit" />
        </form>
      );
      console.log("entra");
    } else {
      showForm = "";
      console.log("sale");
    }

    return (
      <div>
        <button onClick={this.activateForm} className="button">
          Add new food
        </button>
        <div style={{ display: showForm }} >
        {showForm}
        </div>
      </div>
    );
  }
}
