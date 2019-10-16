import React, { Component } from "react";

class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: this.props.quantity
    };
  }
  inputHandler(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }
  render() {
    const { name, calories, image, add } = this.props;
    const { quantity } = this.state;
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{name}</strong> <br />
                <small>{calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input type="number" className="input" name="quantity" value={quantity} onChange={e => this.inputHandler(e)} />
              </div>
              <div className="control">
                <button className="button is-info" onClick={() => add({ quantity, name, calories })}>
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBox;
