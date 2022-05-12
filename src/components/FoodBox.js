import React from 'react';


function FoodBox(props) {
    return (
        <>
          {props.foodList.map((element, index) => {
            return (
              <div className="box">
                <article className="media">
                  <div className="media-left">
                    <figure className="image is-64x64">
                      <img src={element.image} alt=""/>
                      
                    </figure>
                  </div>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>{element.name}</strong> <br />
                        <small>{element.calories}</small>
                      </p>
                    </div>
                  </div>
                  <div className="media-right">
                    <div className="field has-addons">
                      <div className="control">
                        <input className="input" type="number" value="1" />
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
          })}
        </>
      )
    }

export default FoodBox;