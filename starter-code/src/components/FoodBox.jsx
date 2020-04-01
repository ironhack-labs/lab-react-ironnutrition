import React, { useState } from 'react'

const FoodBox = props => {
  const [articleQuantity, setarticleQuantity] = useState(props.data.quantity);
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={props.data.image} alt="PESADOOOOOO" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{props.data.name}</strong> <br />
              <small>{props.data.calories}</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" onChange={(x) => setarticleQuantity(x.target.value)} min="1" max="20" defaultValue={props.data.quantity} />
            </div>
            <div className="control">
              <button onClick={() => props.add({ quantity: parseInt(articleQuantity), name: props.data.name, delete:props.delete, calories: parseInt(props.data.calories) })} className="button is-info" >
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );

};

export default FoodBox