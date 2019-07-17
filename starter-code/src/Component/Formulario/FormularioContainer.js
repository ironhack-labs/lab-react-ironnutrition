import React, { Component } from 'react'
import 'bulma/css/bulma.css';
import "./FormularioContainer.css"
import Input from '../Input/Input';

export default class FormularioContainer extends Component {
  constructor() {
    super()
    this.state = {
      type: {
        text: "text",
        file: "file",
        number: "number",
      },
      placeholder: {
        name: "please write the food name",
        image: "please put the food photo",
        calories: "please write the food calories",
      },
      newFood: {
        name: "",
        calories: undefined,
        image: ""
      }
    }
  }

  handleFormChange(e, field) {
    let newState = { ...this.state }
    newState.newFood[field] = e.target.value
    this.setState(newState)
  }

  submitForm(e) {
    e.preventDefault()
    this.props.rafa(this.state.newFood)
  }


  render() {
    return (
      <div className="formularioContainer">
        <form>
          <fieldset>
            <Input type={this.state.type.text} placeholder={this.state.placeholder.name}
              value={this.state.newFood.name}
              onChange={(e) => this.handleFormChange(e, "name")}
            ></Input>
            <Input type={this.state.type.number} placeholder={this.state.placeholder.calories}
              value={this.state.newFood.calories}
              onChange={(e) => this.handleFormChange(e, "calories")}
            ></Input>
            <Input type={this.state.type.file} placeholder={this.state.placeholder.image}
              value={this.state.newFood.image}
              onChange={(e) => this.handleFormChange(e, "image")}
            ></Input>
          </fieldset>
          <button onClick={(e) => this.submitForm(e)}>Submit this form!</button>
        </form>
      </div>
    )
  }
}
