import React, { useState } from 'react'

function FoodBox(props) {
  const { name, calories, image } = props.food

  const [qtyCount, setQtyCount ] = useState(1);

  const handleQtyChange = event => setQtyCount(event.target.value);

  const addToFoodList = event => {
    event.preventDefault();

    let totalCalories = qtyCount * calories

    const newFoodListObject = { 'name': name, 'caloriesPerPC': calories, 'image': image, 'quantity': qtyCount, 'totalCalories': totalCalories };

    console.log(newFoodListObject)

    props.handleFoodList(newFoodListObject);

    setQtyCount(1);
  }

  return(
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={image} alt="ingredient img" />
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
              <div className="field has-addons">
                <div className="control">
                  <input className="input" type="number" value={qtyCount} onChange={handleQtyChange} />
                </div>
                <div className="control">
                  <button className="button is-info" onClick={addToFoodList}>
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