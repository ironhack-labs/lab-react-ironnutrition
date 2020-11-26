import React from 'react'
import useInput from '../hooks/useInput'

function FoodBox({
  name,
  calories,
  image,
  addListFood,
  totalCaloriesCount
}){

  const quantityInput = useInput(1)

  function handleFormSubmit(event) {
    event.preventDefault()
    const id = (Math.floor(Math.random() * 100000) + 1).toString(16)
    const totalCalories = calories * quantityInput.value
    addListFood({
      name: name,
      calories: totalCalories,
      quantity: quantityInput.value,
      id: id
    })
    totalCaloriesCount(totalCalories)
  }

  return (
  <div className="box">
    <article className="media">
      <div className="media-left">
        <figure className="image is-64x64">
          <img src={image} />
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
        <form className="field has-addons" onSubmit={handleFormSubmit}>
          <div className="control">
            <input className="input" type="number" {...quantityInput}/>
          </div>
          <div className="control">
            <button className="button is-info">
              +
            </button>
          </div>
        </form>
      </div>
    </article>
  </div>
  )
}

export default FoodBox