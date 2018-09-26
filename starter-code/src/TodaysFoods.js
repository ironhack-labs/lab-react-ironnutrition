import React, { Component } from 'react';
import './App.css';


class TodaysFoods extends Component {
  constructor(props){
    super(props)
    this.state={}
  }


  showTodaysFoods = () => {
    return this.props.todaysFoods.map((eachFood, index)=> {
      return <li key={index}>{eachFood.name} = {eachFood.calories}</li>
    })
  }

  render(){
    return(
      <ul>
        {this.showTodaysFoods()}
      </ul>
    )
  }
}


export default TodaysFoods