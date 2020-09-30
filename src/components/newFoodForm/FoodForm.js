import React, { Component } from 'react';

class FoodForm extends Component {

    constructor() {
        super()
        this.state = {
            image: 'https://image.freepik.com/vector-gratis/algodon-azucar-nubes-azucar-3d-ilustracion-realista_163454-199.jpg',
            foodName: '',
            calories: '0'
        }
    }

    handleInputChange = e => {

        const { name } = e.target
        const value = e.target.value

        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()

        this.props.addNewFood(this.state) // Envío la info

        this.setState({                 // Vacío el form
            foodName: '',
            calories: ''
        })
    }


    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <label>Name:</label>
                <input className='input' type="text" name="foodName" value={this.state.foodName} onChange={this.handleInputChange} />
                <br /><br />
                <label>Calories:</label>
                <input className='input' type="number" name="calories" value={this.state.calories} onChange={this.handleInputChange} min='0' />

                <input className='button is-danger form-btn' type="submit" value="Submit" />
            </form>
        )
    }
}

export default FoodForm;