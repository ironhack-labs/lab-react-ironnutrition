import React from 'react';
import 'bulma/css/bulma.css';

const FoodBox = ({ name, image, calories, quantity, onClick }) => {
  const [state, setState] = React.useState(quantity);

  const handleChange = ({ target }) => setState(target.value);
  const handleClick = () => {
   
      console.log('click')
      onClick({ name, calories, image, quantity: state });
    
  };

  return (
    <div key={name} className="FoodBox">
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
                value={state}
                onChange={handleChange}
              />
            </div>
            <div className="control">
              <button onClick={handleClick} className="button is-info">
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default FoodBox;
