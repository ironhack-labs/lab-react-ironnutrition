import foods from '../foods.json';
import React from 'react'
import FoodBox from './FoodBox'

export default function FoodList(props){

  return (
    <div className='column' style={{maxHeight: '80vh', overflow: 'scroll'}}>
      <button style={{width: '100%', marginBottom: '20px'}} className="button is-info">Add New Item</button>
      {props.render.map(el => (
      <FoodBox key={el.name} name={el.name} calories={el.calories} image={el.image}/>
      ))}
    </div>
  )
}