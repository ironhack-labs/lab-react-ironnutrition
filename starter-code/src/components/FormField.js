import React, { Component } from "react";
import "bulma/css/bulma.css";

class FormField extends Component {
  render() {
    const { label, type, placeholder, handleChange } = this.props;
    return (
      <div className="field">
        <label className="label">{label}</label>
        <div className="control">
          <input
            className="input"
            name={label}
            type={type}
            placeholder={placeholder}
            onChange={handleChange}
          />
        </div>
      </div>
    );
  }
}

export default FormField;
