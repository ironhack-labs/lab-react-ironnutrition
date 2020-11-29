import React from 'react';

//Create a foodbox component: geeft een food item weer vanuit foods.json
// ontvang uit json via APP --> dus doorgeven als prop

function FoodBox(food){
  //Foodbox beschrijft de box voor maar 1 fooditem
 
  return(
    <div className="box" key={food.index}>
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={food.image} />
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
          <input className="input" type="number" value={food.quantity} />
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
export default FoodBox