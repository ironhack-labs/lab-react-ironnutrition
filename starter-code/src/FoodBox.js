import React from  'react'

const FoodBox = ({foods}) => {
    const display = foods.map(food => (
        <div className="">
            <article className="media">
            <div className="media-left">
                <figure className="image is-64x64">
                    <img src={food.image} alt={food.name} />
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
                        value="1"
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
    ))
        return (
        <div className="col-4">
            <div className="box" style={{width:'60%'}}>
                {display}
            </div>
        </div>
    
    );
  }
  
  export default FoodBox