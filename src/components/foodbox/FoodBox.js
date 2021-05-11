import React from 'react';
import 'bulma/css/bulma.css';

export default class FoodBox extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      quantity: 1
    }
  }
  handleChange = (e) => {
    let { name, value } = e.target;
    if (name === 'quantity' && value <= 0) {
      return;
    }
    this.setState({ [name]: parseInt(value) });
  };
  render() {
    const { food } = this.props;
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={food.image} alt={food.name}/>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{food.name}</strong> <br />
                <small>{food.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  name="quantity"
                  value={this.state.quantity}
                  onChange={(e) => this.handleChange(e)}
                />
              </div>
              <div className="control">
                <button className="button is-info" onClick={() => this.props.addToTodaysFoods({ ...this.props.food, quantity: this.state.quantity})}>
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
};
