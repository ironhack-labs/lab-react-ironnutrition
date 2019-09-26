import React from 'react'

const FoodBox = ({ info: { name, calories, image }, addTodaysFood, handleInput }) => {
  return (
    <div className='box'>
      <article className='media'>
        <div className='media-left'>
          <figure className='image is-64x64'>
            <img src={image} alt={name} />
          </figure>
        </div>
        <div className='media-content'>
          <div className='content'>
            <p>
              <strong>{name}</strong> <br />
              <small>{calories} cal</small>
            </p>
          </div>
        </div>
        <div className='media-right'>
          <div className='field has-addons'>
            <div className='control'>
              <input className='input' type='number' name='quantity' onInput={handleInput} />
            </div>
            <div className='control'>
              <button className='button is-info' onClick={() => addTodaysFood(name, calories)}>
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
