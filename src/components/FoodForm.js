import React from 'react';
import { Component } from 'react'


class FoodForm extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            calories: "",
            quantity: "",
            image: '',
        }
    }

    handleInputChange(e) {
        const name = e.target.name
        const value = e.target.value

        // Computed property names
        this.setState({ [name]: value })
    }

    handleSubmitForm(e) {
        e.preventDefault()
        const newFood = this.state
        this.props.addFood(newFood)

        this.emptyForm()
    }

    emptyForm() {
        this.setState({ name: '', calories: '', quantity: '', image: '' })
    }


    render() {

        return (
            <>
                <h4>Crear nueva comida</h4>

                <form className="food-form" onSubmit={e => this.handleSubmitForm(e)}>

                    <label>
                        Nombre <input type="text" name="name" value={this.state.name} onChange={e => this.handleInputChange(e)} />
                    </label>
                    <label>
                        Calorias <input type="number" name="calories" value={this.state.calories} onChange={e => this.handleInputChange(e)} />
                    </label>
                    <label>
                        Quantity <input type="number" name="quantity" value={this.state.quantity} onChange={e => this.handleInputChange(e)} />
                    </label>
                    <label>
                        Image <input type="text" name="image" value={this.state.image} onChange={e => this.handleInputChange(e)} />
                    </label>

                    <input type="submit" value="New food"></input>

                </form>
            </>

        )
    }

}

export default FoodForm