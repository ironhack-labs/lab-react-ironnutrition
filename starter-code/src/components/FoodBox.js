import React, { Component } from 'react';

class FoodBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: 1,
      calories: this.props.calories,
      name: this.props.name
    }
  }

  handleInputChange = e => {
    let { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = e => {
    e.preventDefault()
    this.props.addList(this.state)
    this.setState({
      name: '',
      calories: '',
      quantity: 1
    })
  }

  render() {

    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <br />
                <small>{this.props.calories} cal</small>
              </p>
            </div>
          </div>
          <form onSubmit={this.handleFormSubmit}>
            {/* Necesitamos un prevent default para que no envie el formulario y de el error que da al apretar el boton de añadir food */}
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input
                    onChange={this.handleInputChange}
                    className="input"
                    name="quantity"
                    type="number"
                  />
                </div>
                <div className="control">
                  <button className="button is-info"> + </button>
                </div>
              </div>
            </div>
          </form>
        </article>
      </div>
    )
  }

}

export default FoodBox