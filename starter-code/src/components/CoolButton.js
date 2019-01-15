import React, { Component } from "react";
class CoolButton extends Component {
  render() {
    return (
      <button className={this.props.className} onClick={this.props.click}>
        {this.props.children}{" "}
      </button>
    );
  }
}
export default CoolButton;
