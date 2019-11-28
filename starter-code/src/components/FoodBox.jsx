import React, { Component } from "react";

export default class FoodBox extends Component {
  state = { infos: { name: "", calories: "", quantity: "" } };

  handleChange = e => {
    const copy = { ...this.state.infos };
    copy[e.target.name] = e.target.value;
    copy.name = this.props.f.name;
    copy.calories = this.props.f.calories;
    this.setState({ infos: copy });
    console.log(this.state.infos);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.clbk(this.state.infos);
  };

  render() {
    return (
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={this.props.f.image} alt={this.props.f.name} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{this.props.f.name}</strong> <br />
                  <small>{this.props.f.calories} cal</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input className="input" type="number" name="quantity" />
                </div>
                <div className="control">
                  <button className="button is-info">+</button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </form>
    );
  }
}
