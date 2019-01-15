import React, { Component } from "react";
class FormField extends Component {
  render() {
    return (
      <div className="field">
        <label className="label">{this.props.label}</label>
        <div className="control">
          <input
            onChange={this.props.inputchange}
            className="input"
            type={this.props.type}
            placeholder={this.props.placeholder}
          />
        </div>
      </div>
    );
  }
}

export default FormField;
