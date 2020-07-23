import React from 'react'

function FoodBox(props) {
    return (
        <div className='box'>
            <article className='media'>
                <div className='media-left'>
                <figure className='image is-64x64'>
                    <img src={props.image}  alt={props.name}/>
                </figure>
                </div>
                <div className='media-content'>
                <div className='content'>
                    <p>
                    <strong>{props.name}</strong> <br />
                    <small>{props.calories} cal</small>
                    </p>
                </div>
                </div>
                <div className='media-right'>
                <div className='field has-addons'>
                    <div className='control'>
                    <input className='input' type='number' name={props.name} min='0' defaultValue='0' onChange={props.onChange}/>
                    </div>
                    <div className='control'>
                    <button className='button is-info' name={props.name} onClick={props.onClick}>
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
