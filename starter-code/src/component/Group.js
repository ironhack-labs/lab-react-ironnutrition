import React from 'react'
import 'bulma/css/bulma.css'

const Group = ({ today, deleteToday }) => {
  return (
    <div className="column content">
      <h2 className="subtitle">Today's foods</h2>
      <ul>
        {today.map((food, index) => (
          <li key={index}>
            {food.quantity} {food.name} = {food.calories} cal
            <button
              className="button is-small is-danger"
              onClick={() => deleteToday(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <strong>
        Total: {today.reduce((acc, cur) => acc + cur.calories, 0)} cal
      </strong>
    </div>
  )
}

export default Group
