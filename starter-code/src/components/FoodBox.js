import React, {Component} from 'react';



const FoodBox = props =>  {
        return(
            <div className="box">
                <article className="media">
                  <div className="media-left">
                    <figure className="image is-64x64">
                      <img src={props.image} />
                    </figure>
                  </div>

                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>{props.name}</strong> <br />
                        <small>{props.calories}</small>
                      </p>
                    </div>

                  </div>
                  <div className="media-right">
                    <div className="field has-addons">
                      <div className="control">
                        <input
                          className="input"
                          type="number"
                          value={props.quantity}
                          name={props.index}
                          onChange={props.quantity}
                        />

                      </div>
                      <div className="control">
                        <button
                          className="button is-info"
                          onClick={props.addCalories}
                          name={props.index}>
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



