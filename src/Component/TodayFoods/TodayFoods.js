import React, {Fragment} from 'react' 


const TodayFoods = ({ foods }) => {

  return (
      <div className="TodayFoods">{}
      <h2><strong>Today's Food</strong></h2>
      {
        foods.map((food, index) => {
          return (
            <Fragment key={index}>
              <ul>
                <li>{food.quantity} - {food.name}: {food.calories * food.quantity}cal</li>
              </ul>
            </Fragment>
          )
        })
      }    
      <p>Total:
      {
        foods
          .map((food) => food.calories * food.quantity)
          .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
      }
      </p>


      </div>
  )


}


export default TodayFoods 