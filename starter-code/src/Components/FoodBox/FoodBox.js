import React, { Component } from 'react';
import foods from '../../foods.json'
import 'bulma/css/bulma.css';
import './FoodBox.css'

class FoodBox extends Component {
    state = {
        all : foods
    }

    test = () => {
        console.log(this.state.all)
    }


    render(){
        return(
            <div >
                {this.state.all.map((item, index) => {
                    return (
                        <div className="box">
                        <article className="media">
                          <div className="media-left">
                            <figure className="image is-64x64">
                              <img src={item.image} />
                            </figure>
                          </div>
                          <div className="media-content">
                            <div className="content">
                              <p>
                                <strong>{item.name}</strong> <br />
                                <small>{item.calories}</small>
                              </p>
                            </div>
                          </div>
                          <div className="media-right">
                            <div className="field has-addons">
                              <div className="control">
                                <input
                                  className="input"
                                  type="number" 
                                  value={item.quantity}
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
                })}
            </div>
        )
    }
}

export default FoodBox


