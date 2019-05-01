import React from "react";
import "./Form.css";

class Form extends React.Component {
  state = {
    name: undefined,
    calories: undefined,
    image: undefined
  };
  changeFormData(e, key) {
    const newState = { ...this.state };

    // here we modify they cloned state key for example newState["author"]
    // then we assign to it the form component value
    newState[key] = e.target.value;

    // here we assign the form input value to its corresponding part
    // of the state
    this.setState(newState);
  }
  addFood(e) {
    e.preventDefault();

    this.setState(
      {
        ...this.state
      },
      function() {
        this.props.newFood(this.state);
      }
    );
  }
  render() {
    return (
      <div className="divForm">
        <form className="form" enctype="multipart/form-data">
          <label>Product name: </label>
          <input
            type="text"
            name="name"
            placeholder="write a name"
            value={this.state.name}
            onChange={e => this.changeFormData(e, "name")}
          />

          <label>Product calories: </label>
          <input
            type="text"
            name="calories"
            placeholder="wirte the calories"
            value={this.state.calories}
            onChange={e => this.changeFormData(e, "calories")}
          />

          <label>Product image: </label>
          <input
            type="text"
            name="image"
            placeholder="image url"
            value={this.state.image}
            onChange={e => this.changeFormData(e, "image")}
          />

          <button onClick={e => this.addFood(e)}>Add food</button>
        </form>
      </div>
    );
  }
}

export default Form;
