import React, { Component } from 'react'

class FoodForm extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            calories: '',
            image: '',
            quantity: 0
        }
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.props.insertMovie(this.state)
        this.setState({
            name: '',
            calories: '',
            image: '',
            quantity: 0
        })
    }

    handleInputChange = e => {
        const name = e.target.name
        const value = name === '' ? e.target.checked : e.target.value
        this.setState({ [name]: value })
    }

    render() {

        return (
            <>
                <form onSubmit={this.handleFormSubmit}>

                    <label>
                        Nombre:
                        <input name="name" type="text" value={this.state.name} onChange={this.handleInputChange} />
                    </label> <br></br>

                    <label>
                        Calorias:
                        <input name="calories" type="text" value={this.state.calories} onChange={this.handleInputChange} />
                    </label><br></br>

                    <label>
                        Imagen:
                        <input name="image" type="text" value={this.state.image} onChange={this.handleInputChange} />
                    </label><br></br>

                    <label>
                        Cantidad:
                        <input name="quantity" type="number" value={this.state.quantity} onChange={this.handleInputChange} />
                    </label><br></br><br></br>

                    <button>¡Enviar!</button>
                </form>
            </>
        )
    }
}

export default FoodForm