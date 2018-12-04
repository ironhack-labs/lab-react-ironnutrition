import React from "react";

export default class Foodbox extends React.Component {
  constructor() {
    super();
  }

  
  render() {
    return (
      <div>
      <form onSubmit={this.handleFormSubmit}>
          <label>Name</label>
          <input type="text" name="Name" value={this.props.name} />

          <label>Number of Calories</label>
          <input type="text" name="Number of Calories" value={this.props.calories} />

          <label>Image</label>
          <input type="text" name="Image" checked={this.props.image} />
          
          <input type="submit" value="Submit" />
      </form>
    </div>
    );
  }
}