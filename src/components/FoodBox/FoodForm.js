import React, { Component } from 'react'

class NewMeal extends Component {

    constructor() {
        super()

        this.state = {

            name: '',
            calories: '',
            image: ''

        }
    }

    handleInputChange = e => {

        const { name, value } = e.target

        this.setState({ [name]: value })

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

            <form onSubmit={this.handleFormSubmit}>

                <label>Nombre:</label><br />
                <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                <br /><br />

                <label>Calorías:</label><br />
                <input type="text" name="calories" value={this.state.calories} onChange={this.handleInputChange} />
                <br /><br />

                <label>Imagen:</label><br />
                <input type="text" name="image" value={this.state.image} onChange={this.handleInputChange} />
                <br /><br />

                <input type="submit" value="Crear Comida" />
            </form>
        )

    }


}

export default NewMeal

