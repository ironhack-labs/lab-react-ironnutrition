import React, {Component} from 'react';
import { Input } from 'antd';
import './FoodBox.css';

class FoodBox extends Component {
  state = {
    name : this.props.name,
    calories : this.props.calories,
    image : this.props.image,
    quantity: 0
  }

  updateQuantity = (e) => {
    const {value} = e.target;
    this.setState({
      quantity : value
    });
  }

  submitConsumedFood = (e) => {
    e.preventDefault();
    this.props.addConsumedFood(this.state);
    this.setState({quantity : 0});
  }

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} alt={this.props.name} />
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
            <div className="control">
              <Input
                className="input"
                name="quant"
                type="number"
                value={this.state.quantity}
                onChange={e => this.updateQuantity(e)}
                pattern={/^[0-9]{3}$/}
                style={{width: '60%', border: "none", margin: 0, padding: 0, color: '#000'}}
              />
            </div>
            <div className="control">
              <button 
              className={(this.state.quantity >= 0) ? "button is-info" : "button is-info negative"}
              onClick={(e) => this.submitConsumedFood(e)}>
                {(this.state.quantity >= 0) ? `+` : `-`}
                  </button>
            </div>
          </div>
        </article>
      </div>
    )
  }
}

export default FoodBox;