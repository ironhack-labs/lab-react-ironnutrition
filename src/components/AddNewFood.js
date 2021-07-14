import { Component } from "react"
import React from 'react'


import './AddNewFood.css'

class AddNewFood extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            calories: '',
            image: '',
            quantity: '0'
        }
    }

    handleInputChange = e => {
        const name = e.target.name
        const value = e.target.value

        this.setState({
            [name]: value                   // computed property names
        })
    }


    handleFormSubmit = e => {
        e.preventDefault()
        this.props.addFood(this.state)

        this.setState({
            name: '',
            calories: '',
            image: ''
        })
    }


    render() {
        return (
            <>
                <form className="new-food-form" onSubmit={this.handleFormSubmit}>

                    <label>
                        Nombre: <input type="text" value={this.state.name} onChange={this.handleInputChange} name="name" />
                    </label>

                    <label>
                        Calorias: <input type="text" value={this.state.calories} onChange={this.handleInputChange} name="calories" />
                    </label>

                    <label>
                        Imagen: <input type="text" value={this.state.image} onChange={this.handleInputChange} name="image" />
                    </label>



                    <input type="submit" value="Nueva Comida" />
                </form>
            </>
        )
    }
}


export default AddNewFood