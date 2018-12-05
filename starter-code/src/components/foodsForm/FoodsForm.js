import React, { Component } from 'react'

export default class FoodsForm extends Component {
  constructor() {
    super()

    this.state = {
        name: "",
        calories: 0,
        image: ""
        
    }
}
updateHandler = (e) => {
  e.preventDefault();
  this.setState({ ...this.state}, () => {
      this.props.submitHandler(this.state)
  })
}
changeNameHandler = (e) => {
  this.setState(
      { ...this.state, name: e.target.value }
  )
}
changeCaloriesHandler = (e) => {
  this.setState(
      { ...this.state, calories: e.target.value }
  )
}
changeImgHandler = (e) => {
  this.setState(
      { ...this.state, image: e.target.value }
  )
}
  render() {

    return (
      <form>
      <div>
          <input type="text" value={this.state.name} onChange={this.changeNameHandler}></input>
          <input type="text" value={this.state.city} onChange={this.changeCaloriesHandler}></input>
          <input type="text" value={this.state.image} onChange={this.changeImgHandler}></input>
      </div>

      <button onClick={this.updateHandler}>Submit</button>

    

  </form>
    )
  }
}

