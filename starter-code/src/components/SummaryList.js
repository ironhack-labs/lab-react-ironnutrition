import React from 'react'

const SummaryList = ({foods}) => {

  const list = foods.map( (item, i) => {
    return <li key={i}>{item.amount} {item.name} = {item.calories} cal</li>
  })
  
  return (
    <div>
      <ul>
        {list}
      </ul>
    </div>
  )
}

export default SummaryList