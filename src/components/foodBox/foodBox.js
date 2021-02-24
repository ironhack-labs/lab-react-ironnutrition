import React from 'react';
import 'bulma/css/bulma.css';
import AddFood from './../addFood/addFood';

function FoodBox(props) {
  const {
    name,
    calories,
    imageSrc,
    imageAlt,
    quantity,
    updateQuantity,
    toggleDisplay,
  } = props;

  //   console.log(props);

  return (
    <div>
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={imageSrc} alt={imageAlt} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{name}</strong> <br />
              <small>{calories}</small>
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
                onChange={(event) => updateQuantity(name, event.target.value)}
              />
            </div>
            <div className="control">
              <button
                className="button is-info"
                onClick={() => toggleDisplay(name)}
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
