import React from 'react'





function FoodBox(props) {





    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={props.foodElement.image} alt={props.foodElement.name} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{props.foodElement.name}</strong> <br />
                <small>{props.foodElement.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number"  />
              </div>
              <div className="control">
                <button className="button is-info" onClick = {() => props.addToToday(props.foodElement)}>+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
}

export default FoodBox

