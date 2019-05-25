import React from 'react'

const SummaryList = ({foods}) => {

  console.log(foods)

  const list = foods.map( (item, i) => {
    return <li key={i}>{item.amount} {item.name} = {item.calories*item.amount} cal</li>
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