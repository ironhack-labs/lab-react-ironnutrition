import { Component } from 'react'
import React from 'react';

class NewFoodForm extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            image: '',
            calories: '',
            quantity: 0
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
        this.setState({
            name: '',
            image: '',
            calories: '',
            quantity: 0
        })
    }


    render() {

        return (

            <>
                <h4>Crear nueva comida</h4>

                <form className="movie-form" onSubmit={e => this.handleSubmitForm(e)}>

                    <label>
                        Name <input type="text" name="name" value={this.state.name} onChange={e => this.handleInputChange(e)} />
                    </label>
                    <label>
                        Image <input type="text" name="image" value={this.state.image} onChange={e => this.handleInputChange(e)} />
                    </label>
                    <label>
                        Calories <input type="number" name="calories" value={this.state.calories} onChange={e => this.handleInputChange(e)} />
                    </label>

                    <input type="submit" value="Crear"></input>

                </form>

            </>
        )
    }
}


export default NewFoodForm