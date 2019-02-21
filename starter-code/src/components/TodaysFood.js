import React, { Component } from 'react'; 
class TodaysFood extends Component {
    render(){
      console.log("selected food", this.props.selected)
      return (
        <div>
            <h2>Today's food</h2>
            <ul>{this.props.selected.map((foodElem, i)=>{
                return <li key={i}> {foodElem.quantity} {foodElem.name} = {foodElem.calories*foodElem.quantity}</li>
                })}
            </ul>
            Total: 0 cal
        </div>
      )
    }
  }

  export default TodaysFood;