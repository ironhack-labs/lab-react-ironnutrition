import React from 'react';
import './FoodBox.css';



class FoodBox extends React.Component {
  today = (food) => {
    this.props.onAddToday(food)
  }

  render() {
    const {name, image, calories, quantity } = this.props;

    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <img src={image} alt={name} />
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{name}</strong> <br />
                <small>{calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
              <input className="input" type="number" value={quantity} />
              </div>
              <div className="control">
              <button onClick={() => this.today({name, quantity, calories})} className="button is-info">+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBox;
