import React from 'react';

const FoodBox = ({
  name, calories, image, quantity, onAddItem }) => {
  return (<div className="App">
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={image} alt={image} />
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
              <input className="input" type="number" value={quantity} readOnly />  {/* readOnly apenas leitura */}
            </div>
            <div className="control">
              <button onClick={onAddItem} className="button is-info">
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>);
}


export default FoodBox;