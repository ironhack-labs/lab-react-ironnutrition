import React from "react";

class NewFoodForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.addFoodItem}>
        <label>Name</label>
        <input name="name" type="text" />
        <label>Calories</label>
        <input name="calories" type="number" />
        <label>Image URL</label>
        <input name="image" type="text" />
        <button>Submit</button>
      </form>
    );
  }
}

export default NewFoodForm;
