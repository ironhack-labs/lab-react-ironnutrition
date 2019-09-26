import React from 'react'
import 'bulma/css/bulma.css'
const Foodbox = ({food}) => {
  return (


<div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
      <img className="image" src={food.image} alt="" />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{food.name}</strong> <br />
          <small>{food.calories}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            name=""
            type="number" 
          />
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




    //<div>
      //<img className="image" src={food.image} alt="" />
      //<p>{food.name}</p>
     // <p>{food.calories}</p>
      //<p>{food.quantity}</p>
      //<button>+</button>
    //</div>
  )
}

export default Foodbox
