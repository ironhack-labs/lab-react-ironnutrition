import React, { useState } from 'react';
import Foods from './../foods.json';

//console.log(Foods[0].name)

const FoodBox = (food) => {
  //console.log(Foods[0].name)
  const allFood = Foods;
  console.log(allFood) // -> los quita del arreglo 

  return (
    <>
      {allFood.map((elem) => {
        return (
          <div className="box">
            <article className="media">
              <div className="box">
                <article className="media">
                  <div className="media-left">
                    <figure className="image is-64x64">
                      <img src={elem.image} alt="algo" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>{elem.name}</strong> <br />
                        <small>{elem.calories}</small>
                      </p>
                    </div>
                  </div>
                  <div className="media-right">
                    <div className="field has-addons">
                      <div className="control">
                        <input
                          className="input"
                          type="number"
                          value={elem.quantity}
                        />
                      </div>
                      <div className="control">
                        <button className="button is-info">+</button>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </article>
          </div>
        );
      })}
    </>
  );
};

export default FoodBox;