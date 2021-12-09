import React, { useState } from 'react';
import Foods from "./../foods.json"

//console.log(Foods[0].name)

const FoodBox = (food) => {
    //console.log(Foods[0].name)
    const { name, calories, image, quantity } = food
    // const name = food.name;
    // const calories = food.calories;
    // const image = food.image;
    // const quantity = food.quantity;
  
    // const [ pizza, salad, sweetPotato, gnocchi, potRoast, Lasagna, hamburger, padThai, almonds, bacon, hotDog, chocolateCake, wheatBread, orange, banana, yogurt] = Foods
    // console.log(salad)
    //HOOKS:

  return (
    <>
        
      <div className="box">
        <article className="media">
        <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={image} alt="algo"/>
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
                    <input className="input" type="number" value={quantity} />
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
        </article>
      </div>

    </>
  );
};

export default FoodBox;
