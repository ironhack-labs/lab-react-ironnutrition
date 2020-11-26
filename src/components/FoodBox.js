import React, {useState} from 'react'

export default function FoodBox({
  name,
  calories,
  image,
  quantity
}) {
  const [foodQuantity, setFoodQuantity] = useState(quantity)

  function todayHandler() {
    let food = {
      name,
      calories: calories*foodQuantity,
      image,
      quantity: foodQuantity,
    }
  }
  const inputChangeHandler = (e) => {
    setFoodQuantity(foodQuantity + 1)
    console.log(e.target.value)
  };

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
              <small>{calories} kcal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" value={foodQuantity} onChange={inputChangeHandler}/>
            </div>
            <div className="control">
              <button className="button is-info" onClick={todayHandler}>
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}






