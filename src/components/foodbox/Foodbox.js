import React from 'react';
import 'bulma/css/bulma.css';

export default function Foodbox(props) {
    // console.log(props)
    // const addedFood = () => {
    //     console.log(props.item)
    // }

    const changeHandler = (e) => {
        const {quantity, value} = e.target
        props.item.quantity = value
    }

    return (
        <div>
            <div className="box">
                <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={props.item.image} alt=""></img>
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{props.item.name}</strong> <br />
                            <small>{props.item.calories}</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" type="number"  name={props.item.name} defaultValue={props.item.quantity} onChange={changeHandler}/>
                        </div>
                        <div className="control">
                            <button className="button is-info" onClick={() => props.onAdd(props.item)}>
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
