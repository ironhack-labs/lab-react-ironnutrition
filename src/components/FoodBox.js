import React from 'react'


const FoodBox = (props) => {


    return(
        <div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={props.img} />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{props.name}</strong> <br />
          <small>{props.cal}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input className="input" type="number" value={props.quantity} />
        </div>
        <div className="control">
          <button className="button is-info">
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>
    )

}

export default FoodBox