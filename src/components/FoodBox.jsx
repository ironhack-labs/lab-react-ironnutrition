import React, { useState } from 'react'

export default function FoodBox(props) {
    const  {name, calories, image} = props.data;
    const {addTodayFood} = props;
    const [qty, setQty] = useState(0)
    const handleAddFood = () => {
        addTodayFood({
            name: name,
            calories: calories,
            image: image,
            quantity: qty,
        })
    }

    const increaseQuantity = (e) => setQty(e.target.value)

  return (
    <div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={image} alt={name}/>
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{name}</strong> <br />
          <small>{calories} cal</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input className="input" type="number" value={qty} min="0" onChange={increaseQuantity}/>
        </div>
        <div className="control">
          <button className="button is-info" onClick={handleAddFood}>
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>
  )
}