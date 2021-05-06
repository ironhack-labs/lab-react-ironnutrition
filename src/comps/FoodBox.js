// imports
import React from 'react';

// component
class FoodBox extends React.Component {
  state = {
    quantity: 1,
  };

  actualizeFoodQuantity = (event) => {
    this.setState({ quantity: event.target.value });
  };
  addFoodQuantity() {}
  render() {
    return (
      <div className="box">
        <article className="media" key={this.props.index}>
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.food.image} alt={this.props.food.name} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.food.name}</strong> <br />
                <small>{this.props.food.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  onChange={this.actualizeFoodQuantity}
                  value={this.state.quantity}
                />
              </div>
              <div className="control">
                <button
                  className="button is-info"
                  onClick={() =>
                    this.props.todayFunc(this.state.quantity, this.props.food)
                  }
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

//export
export default FoodBox;
