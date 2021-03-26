import React from 'react';
import './css/FoodBox.css'



const FoodBox  = (props) => {
const {
  name,
  calories,
  image,
  quantity,
  addFood,
  id,
  handleChange
} = props;

    return (
        <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={image} alt='img'/>
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
                <input className="input" type="number" name={id} value={quantity} onChange={handleChange} />
              </div>
              <div className="control">
                <button onClick={addFood} className="button is-info">
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
      )
}

export default FoodBox;