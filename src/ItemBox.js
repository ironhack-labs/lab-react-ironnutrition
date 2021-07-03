import React, { useState } from 'react';

const ItemBox = (props) => {
  const [number, setNumber] = useState(1);
  const changeQuantity = (e) => {
    setNumber(e.target.value);
  };
  const addButton = () => {
    props.addToList(props, number);
  };

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={props.image} alt="" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{props.name}</strong> <br />
              <small>{props.calories}</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                id="number"
                type="number"
                className="input"
                value={number}
                onChange={changeQuantity}
              />
            </div>
            <div className="control">
              <button className="button is-info" onClick={addButton}>
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ItemBox;
