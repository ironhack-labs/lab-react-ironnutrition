import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class FoodDetail extends Component {
  state = {
    quantity: 0,
  };

  handleChange = (event) => {
    this.setState({
      quantity: event.target.value,
    });
  };

  render() {
    const { food, onTotal } = this.props;
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={food.image} alt={food.name} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{food.name} </strong> <br />
                <small>{food.calories} </small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  onChange={this.handleChange}
                  className="input"
                  type="number"
                  value={this.state.quantity}
                />
              </div>
              <div className="control">
                <button
                  onClick={() => {
                    onTotal(food, this.state.quantity);
                  }}
                  className="button is-primary is-rounded"
                >
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

export default FoodDetail;
