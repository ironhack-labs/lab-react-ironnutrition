import React, {useState} from 'react'
import FoodList from './components/FoodList'

export default function FoodBox({
  name,
  calories,
  image,
  quantity
}) {
  const itemList = [...foods]
  const [foodQuantity, setFoodQuantity] = useState(0)
  let [foodList, setFoodList] = useState(itemList)

  // JUST NEED TO FINISH ADDING THESE ITEMS TO THE TODAYS FOOD THING!!!!!!!

  function todayHandler(e) {
    console.log(e.target)
    let food = {
      name,
      calories: calories*foodQuantity,
      image,
      quantity: foodQuantity
    }
    // showFood(food)
  }
  const inputChangeHandler = (e) => {
    setFoodQuantity(e.target.value)
  };

  return (
    <div className='column' style={{maxHeight: '80vh', overflow: 'scroll'}}>
      <button style={{width: '100%', marginBottom: '20px'}} className="button is-info">Add New Item</button>
      {foodList.map(el => (
        
      ))}
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
    </div>
  )
}






