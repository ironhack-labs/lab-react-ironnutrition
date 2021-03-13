import React from 'react';

class FoodBox extends React.Component {

  state = {
    quantity: 1
  }

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} alt="" width="400px" />
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
                <input
                  className="input"
                  type="number"
                  min="0"
                  onChange={(e) => this.setState({ quantity: e.target.value })}
                  value={this.state.quantity} />
              </div>
              <div className="control">
                <button onClick={(e) => {
                  let { name, calories } = { ...this.props }
                  let quantity = this.state.quantity
                  this.props.bananas({ name, calories, quantity })
                }
                }
                  className="button is-info">+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBox;
