import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    calories: "",
    image: "",
  };

  onChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
    console.log(this.state);
  };

  handleFormSubmit = event => {
    debugger;
    event.preventDefault();
    //Aqui se Agrega la comida
    this.props.addFood(this.state);
    this.setState({
      name: "",
      image: "",
      calories: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="text"
                placeholder="Name"
                value={this.state.name}
                onChange={this.onChange}
                name="name"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope" />
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check" />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input"
                type="text"
                placeholder="Image url"
                value={this.state.image}
                onChange={this.onChange}
                name="image"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock" />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input"
                type="text"
                placeholder="Calories"
                value={this.state.calories}
                onChange={this.onChange}
                name="calories"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock" />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="button is-success">Submit</button>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
