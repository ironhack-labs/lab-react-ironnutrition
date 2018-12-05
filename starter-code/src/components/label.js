import React, { Component } from 'react'
 export default class Label extends Component {
    constructor() {
        super()
         this.state = {
          name: "",
          calories: 0,
          image: "",
          quantity: 0,
          haveDetailsBeenUpdated: false
        }
    }
     updateDetailsHandler = (e) => {
        e.preventDefault();
        this.setState({ ...this.state, haveDetailsBeenUpdated: true }, () => {
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
  changeImageHandler = (e) => {
      this.setState(
          { ...this.state, image: e.target.value }
      )
  }
     render() {
        return (
            <form>
                
                <div>
                    <input type="text" value={this.state.name} onChange={this.changeNameHandler}></input>
                    <input type="text" value={this.state.calories} onChange={this.changeCaloriesHandler}></input>
                    <input type="text" value={this.state.image} onChange={this.changeImageHandler}></input>
                </div>
                 <button type="submit">Submit</button>
                
             </form>
        )
    }
} 