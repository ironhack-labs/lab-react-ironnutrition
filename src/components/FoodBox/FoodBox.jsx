import React from 'react';
import './FoodBox.css';



class FoodBox extends React.Component {
  today = (food) => {
    this.props.onAddToday(food)
  }

  render() {
    const {id, name, image, calories, quantity, onChange, onAddToday } = this.props;

    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <img src={image} />
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
                <input className="input" type="number" value={quantity} onChange={(e) => onChange(id, Number(e.target.value))} />
              </div>
              <div className="control">
                <button value={quantity} name={name} onClick={() => this.today({name, quantity, calories})} className="button is-info">+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBox;
