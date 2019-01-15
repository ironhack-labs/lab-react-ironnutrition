import React, { Component } from "react";

export default class FormField extends Component {
  render() {
    const {label, type, placeholder, onChange, value} = this.props;
    return (
      <div className="form">
        <div className="field">
          <label className="label">{label}</label>
          <div className="control">
            <input className="input" type={type} placeholder={placeholder} onChange={onChange} value={value}/>
          </div>
        </div>
      </div>
    );
  }
}
