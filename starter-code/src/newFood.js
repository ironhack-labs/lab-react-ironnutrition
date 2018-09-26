import React, { Component } from "react";

class NewFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameField: "",
      caloriesField: "",
      imageField: "",
    };
  }

  nameFieldChange = theEvent => {
    this.setState({ nameField: theEvent.target.value });
  };

  caloriesFieldChange = theEvent => {
    this.setState({ caloriesField: theEvent.target.value });
  };

  imageFieldChange = theEvent => {
    this.setState({ imageField: theEvent.target.value });
  };

  render() {
    return (
      <form className="theForm" onSubmit={e => this.props.addnew(e, this.state)}>
        <h2>Add A New Food</h2>
        <div className="field">
        <label className="label">Name</label>
        <div className="control">
        <input
        className="input"
          type="text"
          onChange={e => this.nameFieldChange(e)}
          value={this.state.nameField}
          />
          </div>
          </div>
        <div className="field">
        <label className="label">Calories</label>
        <div className="control">
        <input
        className="input"
          type="text"
          onChange={e => this.caloriesFieldChange(e)}
          value={this.state.caloriesField}
          />
          </div>
          </div>
        <div className="field">
        <label className="label">Image</label>
        <div className="control">
        <input
        className="input"
          type="text"
          onChange={e => this.imageFieldChange(e)}
          value={this.state.imageField}
          />
          </div>
          </div>

        <button className="button is-primary">Submit</button>
      </form>
    );
  }
}

export default NewFood;
