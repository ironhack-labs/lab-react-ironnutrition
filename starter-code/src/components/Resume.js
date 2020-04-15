import React, { Component } from 'react'

export default class Resume extends Component {

  render() {
    const { myFoods, deleteQuantity } = this.props
    return (
      <div className="box">
          <h1 className="subtitle">Today's Food</h1>
          <ul>
            {myFoods.filter(f => f.quantity > 0).map((f, i) => {
              const cal = f.calories * f.quantity
              return (
                <li key={i}>
                  {`${f.quantity} ${f.name} = ${cal} cal`}
                  <label onClick={() => deleteQuantity(f.name)}>&#128465;</label>
                </li>);
            })}
          </ul>
          <p>
            {`Total ${myFoods.filter(f => f.quantity > 0).reduce((acc, cv) => {
              return acc + (cv.calories * cv.quantity)
            }, 0)} calories`}
          </p>
      </div>
    )
  }
}
