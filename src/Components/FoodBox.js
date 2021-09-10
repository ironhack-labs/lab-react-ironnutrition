import React from 'react';
import 'bulma/css/bulma.css';
import FoodsCart from './FoodsCart'



const FoodBox = ({ foods, theOne }) => {
  let theItem = foods.find((x) => x.name === theOne);
/*   let initial = 1;

const onClick = () => {
  theItem.quantity += 1;
  setCliked(true)
  console.log(theItem.quantity + theItem.name + cliked)
    
}
console.log(initial) */

  return (
    <div className="foodbox">
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={theItem.image} alt="xyz" />
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
                <input className="input" type="number" value='1'/>
              </div>
              <div className="control">
                <button className="button is-info">+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};
export default FoodBox;
