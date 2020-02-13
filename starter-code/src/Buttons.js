import React, { Component } from "react";

class Buttons extends Component {
  render() {
    return (
      <div>
        <button className={this.props.btnType} onClick={this.props.actions}>{this.props.btnText}</button>
      </div>
    );
  }
}

export default Buttons;
