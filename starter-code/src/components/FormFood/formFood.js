import React, { Component } from "react";
import "./formFood.css";

export default class FormFood extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      calories: "",
      img: ""
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
 }


  render() {
    return (
      <form className={this.props.className} onSubmit={e=>this.props.addFood(e,this.state)}>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" onChange={e=>this.handleChange(e)} name="name" type="text" placeholder="Name"/>
          </div>
          <label className="label">Number of calories</label>
          <div className="control">
            <input className="input" onChange={e=>this.handleChange(e)} name="calories" type="text" placeholder="Calories"/>
          </div>
          <label className="label">image</label>
          <div className="control">
            <input className="input" onChange={e=>this.handleChange(e)} name="image" type="text" placeholder="Image"/>
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button type="submit" className="button is-link">Submit</button>
          </div>
        </div>
      </form>
    );
  }
}
