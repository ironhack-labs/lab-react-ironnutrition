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

  nameFieldChange = theEventObject => {
    this.setState({ nameField: theEventObject.target.value });
  };

  caloriesFieldChange = theEventObject => {
    this.setState({ caloriesField: theEventObject.target.value });
  };

  imageFieldChange = theEventObject => {
    this.setState({ imageField: theEventObject.target.value });
  };

  render() {
    return (
      <form onSubmit={e => this.props.addNew(e, this.state)}>
        <h2>Add A New Food</h2>
        <label>Name</label>
        <input
          type="text"
          onChange={e => this.nameFieldChange(e)}
          value={this.state.nameField}
        />

        <label>Calories</label>
        <input
          type="text"
          onChange={e => this.caloriesFieldChange(e)}
          value={this.state.caloriesField}
        />

        <label>Image</label>
        <input
          type="text"
          onChange={e => this.imageFieldChange(e)}
          value={this.state.imageField}
        />

        <button>Submit</button>
      </form>
    );
  }
}

export default NewFood;
