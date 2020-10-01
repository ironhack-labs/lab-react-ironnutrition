import React from 'react'

import '../App.css'
const FoodBox = ({name,calories,image,print}) => {


        return(
                <div className="box">
                    <article className="media">
                        <div className="media-left">
                            <figure className="image is-64x64">
                                <img src={image} alt={name} />
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
                                    <input className="input" type="number"  defaultValue="1" min="1" max="90" />
                                </div>
                                <div className="control">
                                    <button className="button is-info" onClick={print}>
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