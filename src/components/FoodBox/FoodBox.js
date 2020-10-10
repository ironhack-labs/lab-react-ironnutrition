import React from 'react';

function FoodBox(props) {
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={props.elements.image} alt="" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{props.elements.name}</strong> <br />
              <small>{props.elements.calories}</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="number"
                id={props.index}
                value={props.elements.quantity}
                onChange={props.changeQuantity}
                min={1}
              />
            </div>
            <div className="control">
              <button
                className="button is-info"
                id={props.index}
                onClick={props.addItem}
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

export default FoodBox;
