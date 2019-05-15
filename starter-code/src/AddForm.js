import React from "react";

class AddForm extends React.Component {
  state = {};
  render() {
    return (
      <form className="formbox" onSubmit={this.props.addFood}>
        <label>Name: </label>
        <input
          name="name"
          label="Food Name:"
          type="text"
          onChange={this.props.setNameandCalories}
        />

        <label>Calories: </label>
        <input
          name="calories"
          type="text"
          onChange={this.props.setNameandCalories}
        />
        <button>Add Food</button>
      </form>
    );
  }
}

export default AddForm;

{

