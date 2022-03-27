import './FoodBox.css';
import React from 'react';

class FoodBox extends React.Component {
  state = {
    ...this.props.food
  };

  handleIncrement = (event) => {
    const value = event.target.value;

    if(value >= 0){
      this.setState({quantity: value})
    }
  };

  render(){
    const {id, name, calories, image, quantity} = this.state;

    return (
      <div className="box">
        <article className="media">
          <div className="image">
              <img className="food-image" src={image} alt="" />
          </div>
          <div className="content">
            <p>
              <strong>{name}</strong> <br />
              <small>{this.props.food.calories} cal</small>
            </p>
            <div className="control">
              <input
                className="input"
                type="number"
                value={quantity}
                onChange={this.handleIncrement}
              />
            </div>
          </div>
          <div className="media-right">
            <div className="control">
              <button
                className="btn is-info"
                onClick={() => this.props.addToTodaysFood({
                  id,
                  image,
                  name,
                  calories,
                  quantity
                })}
              >
                +
              </button>
            </div>
          </div>
        </article>
      </div>
    );
  };
}

export default FoodBox;