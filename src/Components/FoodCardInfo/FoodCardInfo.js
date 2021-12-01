import React, { useState, useEffect } from 'react'

function FoodCardInfo({ foods, onRemove }) {
  const [total, setTotal] = useState(0)


  useEffect(() => {
    let t = 0;
    foods.forEach(food => {
      t += food.quantity * food.calories
    })
    setTotal(t)
  }, [foods, total])
  //handlers :
  const handleRemove = (index) => {

    onRemove(index)
  }
  //
  return (
    <div>
      <h1>Today`s Food :</h1>
      {foods.map((food, index) => {
        if (food.quantity > 0) {
          return (<div> <p>
            {food.quantity}  {food.name}  = {food.quantity * food.calories} cals
          </p>
            <button onClick={handleRemove.bind(this, index)}>Remove</button>
          </div>

          )

        }
      })}
      <p>Total : {total} calories</p>
    </div>
  )
}

export default FoodCardInfo
