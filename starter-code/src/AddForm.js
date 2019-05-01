import React, { Component } from "react";
import "./AddForm.css";

export default class AddForm extends Component {
  state = {
    displayForm: "none",
    name: "",
    calories: 0,
    image: "",
    quantity: 0
  };

  collectData(e) {
    e.preventDefault();
    this.props.newFood(this.state);
    this.setDisplay();
  }

  changeData(e, key) {
    const newData = { ...this.state };
    newData[key] = e.target.value;
    this.setState(newData);
  }

  setDisplay() {
    if (this.state.displayForm === "none") {
      this.setState({
        ...this.state,
        displayForm: "block"
      });
    } else {
      this.setState({
        ...this.state,
        displayForm: "none"
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.setDisplay()}>Add a Food</button>
        <div className="form">
          <form style={{ display: this.state.displayForm }}>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={e => this.changeData(e, "name")}
            />
            <input
              type="text"
              name="calories"
              value={this.state.calories}
              onChange={e => this.changeData(e, "calories")}
            />
            <input
              type="text"
              name="image"
              value={this.state.image}
              onChange={e => this.changeData(e, "image")}
            />
            <button onClick={e => this.collectData(e)}>Add</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
