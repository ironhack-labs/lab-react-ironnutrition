import React from 'react'


let FoodBox = ({ theFood }) => {
    let showFood = theFood.map((item, index) => (
        <div className='box' key={index}>
            <article className='media'>
                <div className='media-left'>
                <figure className='image is-64x64'>
                    <img src={item.image}  alt={item.name}/>
                </figure>
                </div>
                <div className='media-content'>
                <div className='content'>
                    <p>
                    <strong>{item.name}</strong> <br />
                    <small>{item.calories} cal</small>
                    </p>
                </div>
                </div>
                <div className='media-right'>
                <div className='field has-addons'>
                    <div className='control'>
                    <input className='input' type='number' onChange={() => props.onQuantityChange} name={item.name} value={item.quantity} />
                    </div>
                    <div className='control'>
                    <button className='button is-info' name={item.name}>
                        +
                    </button>
                    </div>
                </div>
                </div>
            </article>
        </div>
     ))
     return (
         <div className="itemthefood">{showFood}</div>
     )
 }

export default FoodBox