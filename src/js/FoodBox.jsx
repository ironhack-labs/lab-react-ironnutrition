import React from 'react'


const FoodBox = (props) => {
        return (
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
                    <small>{props.calories} cal</small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input
                      onChange={function(event){ props.updateQuantity(event, props.index)}}
                      className="input"
                      type="number" 
                      value={props.quantity}
                      min="0"
                    />
                  </div>
                  <div className="control">
                    <button className="button is-info" onClick={() => props.addFood(props)}>
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
