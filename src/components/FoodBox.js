import React from 'react';

function FoodBox(props) {
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={props.image} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{props.name}</strong> <br />
              <small>{props.calories} calories</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                name="quantity"
                type="number"
                onChange={(e) => props.onChangeHandler(e)}
                defaultValue="0"
              />
            </div>
            <div className="control">
              <button className="button is-info" onClick={props.clickToAdd}>
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
