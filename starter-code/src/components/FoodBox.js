import React from "react";

const FoodBox = props => {
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
              <small>{props.calories}</small>
            </p>
          </div>
        </div>
        <div className="media-right">
            <form onSubmit={e => props.addItem(e,props.name,props.calories)} className="field has-addons">
              <div className="control">
                <input className="input" name="quantity" type="number" onChange={props.handleInput} placeholder={props.quantity} />
              </div>
              <div className="control">
                <button className="button is-info" type='submit'>+</button>
              </div>
            </form>
        </div>
      </article>
    </div>
  );
};

export default FoodBox;
