import React, { Component } from "react";
import FormField from "./FormField";

class Form extends Component {
  state = {
    data: {}
  };

  handleChange = e => {
    let { data } = this.state;
    let { name, value } = e.target;
    data[name] = value;
    this.setState({ data });
    console.log("se esta guardando", data);
  };

  render() {
    const { buttonAbility } = this.props;
    return (
      <div className="general-container">
        <div className="form-container">
          <FormField
            label={"name"}
            type={"text"}
            placeholder={"choose a name for this new food"}
            handleChange={this.handleChange}
          />
          <FormField
            label={"calories"}
            type={"text"}
            placeholder={"set the food calories"}
            handleChange={this.handleChange}
          />
          <FormField
            label={"image"}
            type={"text"}
            placeholder={"set an image url"}
            handleChange={this.handleChange}
          />
          <div>
            <button
              className="button is-link"
              onClick={() => buttonAbility(this.state.data)}
            >
              Submit Food
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
