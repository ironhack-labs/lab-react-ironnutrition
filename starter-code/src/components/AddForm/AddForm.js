import React, { Component } from 'react'

export default class AddForm extends Component {
  constructor(){
  super()
  this.state = {
      name: '',
      cal: '',
      imgPath: '',
  }
}

changeHandler=(e)=>{
  let stateCopy = {...this.state};
  stateCopy[e.target.name]=e.target.value;
  console.log(stateCopy);
  this.setState(stateCopy);
}



  render() {
    return (
      <form>
        <input onChange={this.changeHandler} type="text" name="name" placeholder="Name" value={this.state.name}></input>
        <input onChange={this.changeHandler} type="number" name="cal" placeholder="calories" value={this.state.cal}></input>
        <input onChange={this.changeHandler} type="text" name="imgPath" placeholder="Image" value={this.state.imgPath}></input>
        <button onClick={(e)=>{e.preventDefault();
          this.props.callbackFunction(this.state.name,this.state.cal,this.state.imgPath)}}
              type="submit">submit
        </button>
      </form>
    )
  }
}
