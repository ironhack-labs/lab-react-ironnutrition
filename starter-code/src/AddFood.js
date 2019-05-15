import React, { Component } from "react";

class AddFood extends Component {
  render() {
    return (
      <div>
        <div>Add Food </div>
        <form onSubmit={this.props.addAFood}>
          <input
            name="food"
            type="text"
            onChange={this.props.setFoodAndDetails}
          />
          <input
            name="calories"
            type="text"
            onChange={this.props.setFoodAndDetails}
          />
          <input
            name="image"
            type="text"
            onChange={this.props.setFoodAndDetails}
          />
          <button>Add Food</button>
        </form>
      </div>
    );
  }
}

export default AddFood;
