import React, { Component } from "react";

class Add extends Component {
  render() {
    return (
      <div className=" addform control">
        <button className="button is-info" onClick={this.props.onClick} >+</button>
        <input type="text" placeholder="Food Name" name="nameAdd" className="input" onChange={this.props.nameChange} value={this.props.nameAdd} />
        <input type="number" placeholder="Calories" name="calAdd" className="input" onChange={this.props.nameChange} value={this.props.calAdd} />
        <input type="text" placeholder="image" name="img" className="input" onChange={this.props.nameChange} value={this.props.img} />

      </div>
    );
  }
}

export default Add;
