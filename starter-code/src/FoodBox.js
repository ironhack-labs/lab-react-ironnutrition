import React, { Component } from "react";
import "./FoodBox.css"

export default class FoodBox extends Component {

  state = {
    name: this.props.name,
    calories: this.props.calories,
    image: this.props.image,
    quantity: this.props.quantity
  }

  changeData(e) {
    const newData = {...this.state}
    newData.quantity = e.target.value
    this.setState(newData)
  }

  collectData(e) {
    e.preventDefault();
    if(this.state.quantity <= 0) {return}
    this.props.menuFood(this.state)
    this.setState({
      ...this.state,
      quantity: 0
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={this.props.image} alt={this.state.name}/>
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{this.state.name}</strong> <br />
                  <small>{this.state.calories}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input className="input" type="number" min="0" value={this.state.quantity} onChange={(e) => this.changeData(e)}/>
                </div>
                <div className="control">
                  <button className="button is-info" onClick={(e) => this.collectData(e)}>+</button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </React.Fragment>
    );
  }
}
