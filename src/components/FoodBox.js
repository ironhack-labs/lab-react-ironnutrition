import React from 'react';

const FoodBox = (props) => {
  const { food } = props;
//   console.log(food)
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
            <img src={food.image} alt="food"/>
            </figure>
          </div>
          <div className="media-content">
              <div className="content">
              <p>
                <strong>{food.name}</strong> <br />
                <small>{food.calories} cal</small>
              </p>
              </div>
          </div>
          <div className="media-right">
              <div className="field has-addons">
              <div className="control">
                <input 
                  className="input" 
                  type="number" 
                  placeholder='Number of calories'
                  // value=0
                  onChange={(e) => {console.log(e.target.value)}}
                />
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

export default FoodBox;