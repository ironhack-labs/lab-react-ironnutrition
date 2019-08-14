import React from 'react'


const FoodComponent = ({ name, calories, image }) => {

    return (
        <div className="container">
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
                            <small>{calories} cal</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input
                                className="input"
                                type="number"
                                
                            placeholder="0"/>
                        </div>
                        <div className="control">
                            <button className="button is-info" >
                                +
          </button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default FoodComponent