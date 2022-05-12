import React from 'react';
import { useState } from 'react';

const FoodBox = ({ foods , setFood, setShowFood}) => {
  const [count, setcount] = useState(foods.quantity)


  console.log(setFood)
  const increaseCount = () => {
   const newOrder={
      name:foods.name,
      quantity : count

    }
    setShowFood(newOrder)
    setcount(0)
  
  }



  return (
    
          <div  className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={foods.image ? foods.image : "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2020/02/0/0/generic.jpg"} />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{foods.name}</strong> <br />
                    <small>{foods.calories}</small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input className="input" type="number" value={count} onChange={(e)=>setcount(e.target.value)} />
                  </div>
                  <div className="control">
                    <button onClick={increaseCount} className="button is-info">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>


  )
}

export default FoodBox;