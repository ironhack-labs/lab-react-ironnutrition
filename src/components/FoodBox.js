import React from 'react'
import './FoodBox.css'


export default function FoodBox({name, calories, image, quantity, addTodaysFoods})  {

    return(
        <div>
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={image} alt={
                                name}/>
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
                                <input id={name} className="input" type="number" name='quantity' value="1" />
                            </div>
                            <div className="control">
                                <button  className="button is-info" onClick={() => addTodaysFoods({name, calories, quantity})}>
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>           
        </div>
    )
}

