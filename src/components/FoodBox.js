import React from 'react'

export default function FoodBox(props) {

    return (
        <>
            {props.food.map((e, id) => 
                {
                 return (
                <div className="box">
                <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                    <img src={e.image} />
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                        <strong>{e.name}</strong> <br />
                        <small>{e.calories} cal</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" type="number" value={e.quantity} />
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
            })
            }
            
        </>
    )
}
