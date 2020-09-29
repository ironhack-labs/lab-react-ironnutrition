import React from 'react';
import '../stylesheets/FoodList.css';

class FoodBox extends React.Component {
  state = {
    quantity: 1,
  };

  handleChange = (event) => {
    this.setState({ quantity: event.target.value });
  };

  handleClick = () => {
    this.props.food.quantity = this.state.quantity
    this.props.onAddToMenu(this.props.food)
  }
  handleClickDelete = () => {
    
    this.props.onDeleteToMenu(this.props.food)
  }

  render() {
    return (
      <div className="box" key={this.props.food.image}>
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
                <input min="0"
                  className="input"
                  type="number"
                  value={this.state.quantity}
                  onChange={this.handleChange}
                />
              </div>
              <div className="buttons has-addons">
                <button
                  className="button is-info"
                  onClick={this.handleClick}
                >
                  +
                </button>
                <button
                  className="button is-danger"
                  onClick={this.handleClickDelete}
                >
                  -
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
