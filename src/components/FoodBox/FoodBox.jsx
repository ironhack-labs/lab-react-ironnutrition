import React from 'react';
import './FoodBox.css';

export default class FoodBox extends React.Component {
  render() {
    const { id, name, calories, image, quantity, onChange, onAddList } =
      this.props;
    return (
      <div className="FoodBox">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={image} alt={name} />
            </figure>
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
                <input
                  className="input"
                  type="number"
                  value={quantity}
                  onChange={(e) => onChange(id, Number(e.target.value))}
                />
              </div>
              <div className="control">
                <button
                  className="button is-info add-button"
                  value={quantity}
                  name={name}
                  onClick={onAddList}
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
