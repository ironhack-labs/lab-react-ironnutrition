import React, { Component } from 'react'

export default class AddForm extends Component {
  constructor(){
  super()
  this.state = {
      name: '',
      cal: '',
      value3: '',
      value4: ''
  }
}



  render() {
    return (
      <form onSubmit={()=>(this.state.this.props.callbackFunction(this.state.name,this.state.cal,this.state.imgPath))}>
        <input type="text" name="name" placeholder="Name" value={this.state.name}></input>
        <input type="number" name="cal" placeholder="calories" value={this.state.cal}></input>
        <input type="text" name="imgPath" placeholder="Image" value={this.state.imgPath}></input>
        <button onClick={}></button>
      </form>
    )
  }
}
