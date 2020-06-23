import React from 'react'
import 'bulma/css/bulma.css';


export default function Food(props) {

    

    return (
        <div>

        <div className="box">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src= {props.img} width = "100px" height = "100px" alt = "no img"/>
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
                         <input className="input" type="number" value= {props.quantity} />
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
    </div>
    )
}
