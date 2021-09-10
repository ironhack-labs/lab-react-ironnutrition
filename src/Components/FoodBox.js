import React from 'react';
import 'bulma/css/bulma.css';
//import foods from '/src/foods.json';

const FoodBox = ({foods, theOne}) => {
//console.log(foods)
let theItem = foods.find((x)=> x.name === theOne)
//console.log(theItem)
    return (
      /*   theItem.map((food) => { return ( */
      <div className="foodbox">
<div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={theItem.image} alt='xyz'/>
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{theItem.name}</strong> <br />
          <small>{theItem.calories}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
         {/*  <input className="input" type="number" value="1" /> */}
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
{/* {foods.map((food) => { return (food.name)}) } */}
      </div>
    
  /*   )}) */
    );
  };
export default FoodBox