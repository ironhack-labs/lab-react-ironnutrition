import React from 'react'


import FoodBox from '../FoodBox';

function Foodlist(props) {

  return (
    <div>

      <h1>Foodlist</h1>
      {props.food.map((foodMaped, index) => {
        return (
          <div key={index}>
            <FoodBox food={foodMaped} />

          </div>


        )

      })}
    </div>
  )
}

export default Foodlist