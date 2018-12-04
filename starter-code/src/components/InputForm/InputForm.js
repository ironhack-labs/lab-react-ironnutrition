import React, { Component } from "react";

export default class InputForm extends Component {
  render() {
    return (
      <div className="field">
        <label className="label">{this.props.label}</label>
        <div className="control">
          <input
            className="input"
            type={this.props.type}
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={e => this.props.handleChange(e)}
            name={this.props.name}
          />
        </div>
      </div>
    );
  }
}
