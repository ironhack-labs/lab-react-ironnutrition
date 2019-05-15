import React from "react";

class FoodBox extends React.Component {
  state = {
    quantity: 0
  };

  changeQuantity(e) {
    console.log(e.target.value);
    this.setState({ quantity: e.target.value });
  }

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.food.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.food.name}</strong> <br />
                <small>{this.props.food.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  name="foodQuantity"
                  value={this.state.quantity}
                  onChange={e => this.changeQuantity(e)}
                />
              </div>
              <div className="control">
                <button
                  onClick={() => {
                    this.props.addListItem(
                      this.props.food,
                      this.state.quantity
                    );
                  }}
                  className="button is-info"
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

export default FoodBox;
