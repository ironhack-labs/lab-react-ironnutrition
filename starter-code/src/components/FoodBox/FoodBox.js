import React, { Component } from 'react';
import Button from '../Button/Button';

class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      calories: props.calories,
      qty: 1,
    }
  }


  handleClick = () => {
    const { name, calories, qty } = this.state
    this.setState({
      name,
      calories,
      qty,
    }, this.props.onClickFunc(this.state))
  }

  addQty = (e) => {
    console.log(e.target.value)
    this.setState({
      qty: Number(e.target.value),
    })
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
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number" 
                  defaultValue={1}
                  onChange={(e) => this.addQty(e)}
                />
              </div>
              <div className="control">
                <Button onClickFunc={this.handleClick}>
                  {this.props.children}
                </Button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBox;
