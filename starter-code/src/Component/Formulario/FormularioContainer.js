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
      placeholder:{
        name: "please write the food name",
        image: "please put the food photo",
        calories: "please write the food calories",
      }
    }


  }
  render() {
    return (
      <div className="formularioContainer">
        <h1>Añade una Comida</h1>
        <form>
          <fieldset>
            <Input type={this.state.type.text} placeholder={this.state.placeholder.name}
            ></Input>
            <Input type={this.state.type.number} placeholder={this.state.placeholder.calories}
            ></Input>
            <Input type={this.state.type.file} placeholder={this.state.placeholder.image}
            ></Input>

          </fieldset>

        </form>
      </div>
    )
  }
}
