import React from 'react'

const SummaryList = ({foods, removeTodaysFood}) => {

  const handleClick = e => {
    removeTodaysFood(e.target.name)
  }

  const list = foods.map( (item, i) => {
    return (
    <li className="mt-3 mb-3" key={i}>{item.amount} {item.name} = {item.calories*item.amount} cal <button className="button is-danger" name={i} onClick={handleClick}>X</button></li>
    )

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