import React, { Component } from 'react'

export default class Search extends Component {
  constructor(){
    super()
    this.state={
      name:""
    }
  }
  updateFormData(e,field,fieldType){
    let newState={
      ...this.state
    }
    newState[field] = fieldType === "number" ? +e.target.value : e.target.value;

    this.setState(newState);
    this.props.includeFood(e)
  }
  render() {
    return (
      <div>
        <input  onChange={e => this.updateFormData(e, "name", "string")} type="text" name="Search" />
      </div>
    )
  }
}
