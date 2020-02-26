import React from "react";

import "./Form.css";
export default class Form extends React.Component {
  state = {
    name: "",
    calories: 0,
    image: "",
    quantity: 0
  };

  updateForm(e, field) {
    this.setState({
      ...this.state,
      [field]: e.target.value
    });
  }

  sendForm(e) {
    e.preventDefault();
    this.props.function(this.state);
  }
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="name"
          value={this.state.name}
          onChange={e => this.updateForm(e, "name")}
        />
        <input
          type="number"
          placeholder="calories"
          value={this.state.calories}
          onChange={e => this.updateForm(e, "calories")}
        />
        <input
          type="text"
          placeholder="image"
          value={this.state.image}
          onChange={e => this.updateForm(e, "image")}
        />
        <input
          type="submit"
          value={"Send form"}
          onClick={e => this.sendForm(e)}
        />
        {/* {this.state.userAdded && <h5>✅ Employee has been added</h5>}
        {this.state.userAddedError && (
          <h5>❌ Employee has not been added. Reason: {this.state.userAddedError}</h5> */}
      </form>
    );
  }
}
