import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props){

    super(props)
    this.state={
      name:"",
      calories:0,
      image:"https://i.imgur.com/DupGBz5.jpg"
    }
  }
  updateFormData(e,field,fieldType){
    let newState={
      ...this.state
    }
    newState[field] = fieldType === "number" ? +e.target.value : e.target.value;

    this.setState(newState);
  }
  sendState(e) {
    e.preventDefault();
    this.props.sendStateFromApp(this.state);
  }
  render() {
    return (
      <div>
         <input
          type="text"
          name="name"
          placeholder="name"
          value={this.state.name}
          onChange={e => this.updateFormData(e, "name", "string")}
        ></input>
        <input
          type="number"
          placeholder="calories"
          name="calories"
          value={this.state.calories}
          onChange={e => this.updateFormData(e, "calories", "number")}
        ></input>
        <input
          type="text"
          name="image"
          placeholder="image"
          value="https://i.imgur.com/DupGBz5.jpg"
          onChange={e => this.updateFormData(e, "image", "string")}
        ></input>
        <button onClick={(e)=>this.sendState(e)}>ADD Food</button>
      </div>
    )
  }
}
