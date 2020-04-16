import React, { Component } from 'react'

class ResumeLine extends Component{
  render() {
    const { food: { name, calories, quantity }, deleteQuantity, key } = this.props
    return (
      <li key={key}>
        {`${quantity} ${name} = ${calories * quantity} cal`}
        <label onClick={() => deleteQuantity(name)}>&#128465;</label>
      </li>
    );
  }
}

export default class Resume extends Component {

  render() {

    const { myFoods, deleteQuantity } = this.props
    const showLines = myFoods.filter(f => f.quantity > 0)
    const totalCalories = showLines.reduce((acc, cv) => acc + (cv.calories * cv.quantity), 0)

    return (
      <div className="box">
          <h1 className="subtitle">Today's Food</h1>
          <ul>
            {showLines.map((f, i) => {
              return <ResumeLine food={f} deleteQuantity={deleteQuantity} key={i}/>
            })}
          </ul>
          <p>
            {`Total ${totalCalories} calories`}
          </p>
      </div>
    )
  }
}
