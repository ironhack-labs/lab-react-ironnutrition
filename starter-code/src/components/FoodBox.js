import React, { Component } from 'react';

class FoodBox extends Component {
  state = {
    quantity: this.props.quantity
  }

  handleTodaysFoodAdd = () => {
    //event.preventDefault();
    this.props.todaysFoodHandler(this.props.index, parseInt(this.state.quantity));
  }

  handleChange = (event) => {
    let {name, value} = event.target;
    //console.log(name, value);
    this.setState({
       [name]: value
    })  
  }

  render() {
    //console.log(this.props);
    return (<div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={this.props.image} alt="Bild" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{this.props.name}</strong> <br />
              <small>{this.props.calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                name="quantity"
                type="number"
                value={this.state.quantity}
                onChange={this.handleChange}
              />
            </div>
            <div className="control">
              <button className="button is-info" onClick={this.handleTodaysFoodAdd}>
              +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>);
  }
}

export default FoodBox;
