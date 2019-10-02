import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
        <form onSubmit={this.props.submitHandle} onChange = {this.props.changeHandle} className="column is-half">
          <div className="field">
            <label className="label">Name:</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="name"
                onChange={this.props.changeHandle}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Calories:</label>
            <div className="control">
              <input
                className="input"
                type="number"
                name="calories"
                onChange={this.props.changeHandle}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Image URL:</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="image"
                onChange={this.props.changeHandle}
              />
            </div>
          </div>
          <div className="control">
            <button className="button is-primary">Submit</button>
          </div>
        </form>
    );
  }
}

export default Form;
