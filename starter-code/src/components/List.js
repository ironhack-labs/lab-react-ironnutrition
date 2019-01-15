import React, { Component } from "react";
class List extends Component {
  render() {
    return (
      <div>
        <p>
          {this.props.value} {this.props.name} = {this.props.calories} cal
        </p>
      </div>
    );
  }
}
export default List;
