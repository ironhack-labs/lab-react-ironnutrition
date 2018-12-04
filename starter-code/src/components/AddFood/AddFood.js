import React, { Component } from "react";
import "./AddFood.css";

export default class AddFood extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      image: "",
      name: "",
      calories: "",
      quantity: 0
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();

    this.props.addFoodHandler(this.state);
    // this.props.addTheMovie(this.state);
    this.setState({
      image: "",
      name: "",
      calories: ""
    });
  };

  handleChange(event) {
    let { name, value } = event.target;
    this.setState({[name]: value});
  }

  render() {
    return (
      <form className="form-section" onSubmit={this.handleFormSubmit}>
        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              type="text"
              placeholder="URL image"
              name="image"
              onChange={e => this.handleChange(e)}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock" />
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="text"
              placeholder="Name"
              name="name"
              onChange={e => this.handleChange(e)}
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
              placeholder="Calories"
              name="calories"
              onChange={e => this.handleChange(e)}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock" />
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button type="submit" className="button is-success">
              Save
            </button>
          </p>
        </div>
      </form>
    );
  }
}
