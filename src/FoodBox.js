import React, { Component } from 'react'
import food from './foods.json'
import './FoodBox.css'

export default class FoodBox extends Component {
    constructor(props) {
        super(props)

        this.state = {
            foodsArray: food,
            image: "",
            name: "",
            calories: "",
            /*  contactsLeft: contacts.slice(5, contacts.length) */
            toggleForm: false

    }
    }
    

    handleTitle = (e) => {
        const input = e.currentTarget
        const title = input.value
        this.setState({
            title: title
        })
    }

    handleChange = (e) => {
        let { name, value } = e.currentTarget

        this.setState({
            [name]: value
        })
    }

    showForm = (e) => {

        this.setState({
            toggleForm: !this.state.toggleForm

        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const {image, name, calories} = this.state

        const arrayTemporal = [...this.state.foodsArray]
        
        arrayTemporal.push({image, name, calories})

        this.setState({foodsArray : arrayTemporal})
        //llamada al server (API)
    }




    render() {

        return (
            <div className="box">
            <button onClick={() => this.showForm()}>
            Comida!
          </button>

            {this.state.toggleForm && 
                <>
                <form onSubmit={this.handleSubmit} className="new-food">

                    <label>
                        Imagen: <input onChange={this.handleChange} value={this.state.image} type="text" name="image" />
                    </label>

                    <label>
                        Nombre: <input onChange={this.handleChange} value={this.state.name} type="text" name="name" />
                    </label>

                    <label>
                        Calorías: <input onChange={this.handleChange} value={this.state.calories} type="text" name="calories" />
                    </label>

                <input type="submit" value="Crear plato" />
                </form>
                <br/>
                <br/>
                </>
            }
                
            {this.state.foodsArray.map(eachFood => (
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img className="img-size" src={eachFood.image} />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{eachFood.name}</strong> <br />
                    <small>{eachFood.calories}</small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input className="input" type="number" value={eachFood.quantity} />
                  </div>
                  <div className="control">
                    <button className="button is-info">
                      +
                    </button>
                  </div>
                </div>
              </div>
              
            </article>
            
            ))}
          </div>
          
          
        )
    }
}
