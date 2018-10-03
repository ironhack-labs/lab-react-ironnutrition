import React, { Component } from "react";
class Form extends Component {
  state = {
    name: "",
    calories: "",
    image: "",
    quantity: ""
  };
  submitForm = e => {
    e.preventDefault();
    this.props.submitForm(this.state);
    this.setState({
      name: "",
      calories: "",
      image: "",
      quantity: ""
    });
  };
  render() {
    return (
      <React.Fragment>
      <form>
        <input
          placeholder="Name"
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <br />
        <input
          placeholder="Calories"
          value={this.state.calories}
          onChange={e => this.setState({ calories: e.target.value })}
        />
        <br />
        <input
          placeholder="Image"
          value={this.state.image}
          onChange={e => this.setState({ image: e.target.value })}
        />
        <br />
        <input
          placeholder="Quantity"
          value={this.state.quantity}
          onChange={e => this.setState({ quantity: e.target.value })}
        />
        <br />
        <button onClick={e => this.submitForm(e)}>Submit</button>

        <br />
      </form>
      </React.Fragment>
    );
  }
}
export default Form;
