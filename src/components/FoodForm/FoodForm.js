import React, { Component } from 'react'

const INITIAL_STATE = {
    name: '',
    image: '',
    calories: '',
    servings:''
  }

  class FoodForm extends Component {
    state = {...INITIAL_STATE}

    handleOnChange = (event) => {
        console.log(event)
        const { value, name } = event.target 
       //para recibir lo que esta en el form
        this.setState({ [name]: value }) // meter entre corchetes una variable para hacer el key dinamico
      //y actualizar el estafo
    }
    
      onSubmit = (event) => {
        event.preventDefault() 
        // Para evitar el comportamiento por defecto de un form, 
        //que seria hacer peticion get y nos refrescaria la pagina
    
        this.props.createFood(this.state)
        this.setState({...INITIAL_STATE})
      }
    
      render() {
        const { name, image, calories, servings } = this.state
    
        return (
          <form onSubmit={this.onSubmit}>
            <input
              name="name" id="name"
              value={name} onChange={this.handleOnChange}
              placeholder="Name of the food"
              required
            />
            <input
              name="image" id="image"
              value={image} onChange={this.handleOnChange}
              placeholder="Img url of the food"
            />
            <input
              name="calories" id="calories"
              value={calories} onChange={this.handleOnChange}
              placeholder="calories of the food"
            />
             <input
              name="servings" id="servings"
              value={servings} onChange={this.handleOnChange}
              placeholder="servings of the food"
            />
    
            <button>Submit</button>
          </form>
        )
      }
    }
    

export default FoodForm