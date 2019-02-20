import React, { Component } from 'react'

export default class Papeo extends Component {
  render() {
    return (
      <div className="papeo">
        {console.log(this.props.contenido)}
        {this.props.contenido.map((comida) => {
          return comida.nombre + " " + comida.cantidad
        })}
      </div>
    )
  }
}
