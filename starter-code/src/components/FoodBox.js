import React, {Component} from 'react';



const FoodBox =({name, calories, image, id, newfoodsarray}) =>  {
        return(
            <div className="box">
                <article className="media">
                  <div className="media-left">
                    <figure className="image is-64x64">
                      <img src={image} />
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
                        <input
                        onChange={this.inputChange}
                        className="input"
                        type="number" 
                        id={id}
                          
                        />
                      </div>
                      <div className="newfoodsarray">
                        {/* <button onClick={this.props.quantity} className="newfoodsarray" value={newfoodsarray}>
                        +
                        </button> */}
                      </div>
                    </div>
                  </div>
                </article>
            </div>
        )
    }    
export default FoodBox



