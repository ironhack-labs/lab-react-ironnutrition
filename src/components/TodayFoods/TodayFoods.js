import React from 'react' 


const TodayFoods = ({foods, quantity}) => {

  return (
      <div className="TodayFoods">{}
      <h2>Today's Food </h2>
      <p>{quantity}</p>
      {
        foods.map((food) => food.name)
      }
      {/* Necesitamos el json foods */}     
      <ul>
        {
          <li>  </li>
        }
       </ul>

       <p><strong>Total: </strong></p>
       
      </div>
  )
    

}


export default TodayFoods