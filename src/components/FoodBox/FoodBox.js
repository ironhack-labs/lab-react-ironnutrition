import React from 'react'
import "./Foodbox.css"
import Search from "../Search/Search"


function FoodBox({food}) {
  
    const mapFood  = food.map((item) =>

    <div className="box">
    <article className="media">
      <div className="media-left">
        <figure className="image is-64x64">
          <img src={item.image} alt=""/>
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{item.name}</strong> <br />
            <small>{item.calories}</small>
          </p>
        </div>
      </div>
      <div className="media-right">
        <div className="field has-addons">
          <div className="control">
            <input className="input" type="number" value="1" />
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
  

    return (
        <div>
            <Search/>
            {mapFood}
        </div>
    )
}

export default FoodBox




