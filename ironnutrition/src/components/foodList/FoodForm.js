import React, { Component } from 'react'
import './FoodForm.css'

export default class FoodForm extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            calories: '',
            image: '',
            quantity: ''
        }
    }

    newInfo = e => {
        const { name } = e.target
        const value = e.target.type

        this.setState({ [name]: value })
    }


    handleFormSubmit = e => {
        e.preventDafault()

        this.props.addFood(this.state)
        this.setState({
            name: ''

        })
    }


    render() {
        return (

            <form className='formulario' onSubmit={this.handleFormSubmit}>
                <label className='form-info'>Name:</label>
                <input className='form-info' type='text' name='name' value={this.state.name} onChange={this.newInfo} />
                <br />

                <label className='form-info'>Calories:</label>
                <input className='form-info' type='text' name='calories' value={this.state.calories} onChange={this.newInfo} />
                <br />

                <label className='form-info'>Image:</label>
                <input className='form-info' type='file' name='image' value={this.state.image} onChange={this.newInfo} />
                <br />

                <label>Quantity:</label>
                <input type='text' name='quantity' value={this.state.quantity} onChange={this.newInfo} />
                <br />
            </form>
        

        )
    }
}