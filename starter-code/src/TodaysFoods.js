import React, { Component } from 'react';

class TodaysFoods extends Component {
  constructor(props){
      super(props)
      this.state = {

      }
  }

  // listItems () {
  //   this.props.todaysFoods.map((eachFood)=> {
  //     return <li>{eachFood.quantity} {eachFood.name}  {eachFood.calories}</li>
  //   })
  // }

  render(){
    return(
      <div>
        <h2>Today's foods</h2>
        <ul>
        {this.props.todaysFoods.map((eachFood)=> {
          return <li>{eachFood.quantity} {eachFood.name}  {eachFood.calories*eachFood.quantity}</li> })}
        </ul>
        <p>Total: {this.props.total}</p>
      </div>
  )
  }


}


export default TodaysFoods;