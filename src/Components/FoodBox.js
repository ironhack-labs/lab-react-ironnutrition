import React from 'react';
import { useState } from 'react';

const FoodBox = ({ foods }) => {
  const [count, setcount] = useState(1)
  const [showFood, setShowFood] = useState([])

  const increaseCount = (id) => {
  
  }



  return (
    <>
      {foods.map((food ,index)=> {
        return (
          <div key={index} className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={food.image ? food.image : "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2020/02/0/0/generic.jpg"} />
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
                    <input className="input" type="number" value={count} onChange={(e)=>setcount(e.target.value)} />
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
      }
      )}

      <h3>Todays Food</h3>
      <ul>
        { }
      </ul>
    </>



  )
}

export default FoodBox;