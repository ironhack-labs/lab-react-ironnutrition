import React, { Component } from 'react';

export default class FoodBox extends Component {
  state = {
    quantity: 0,
    calories: this.props.calories
  };

  addQuantity = e => {
    this.setState({
      quantity: e.target.value,
      calories: this.state.calories * e.target.value
    });
    console.log(e.target.value, 'this is working please');
    console.log('The quanitity for', this.props.name, 'is', e.target.value);
    console.log('The calories for', this.props.name, 'is', this.state.calories);
  };

  // caloriesSubtotal = _ => {

  // };

  render() {
    return (
      <div>
        <div className="main-container">
          <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={this.props.image} alt="" />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{this.props.name}</strong> <br />
                    <small>{this.props.calories}</small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input className="input" type="number" value={this.props.quantity} onChange={this.addQuantity} />
                  </div>
                  <div className="control">
                    <button className="button is-info">+</button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }
}
