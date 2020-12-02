import React, { Component } from 'react'


export default class FoodForm extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            image: '',
            calories: '',
            quantity:''
        }
    }

    // handleInputChange = e => {

    //     const { name } = e.target

    //     this.setState({ [name]: value })          
    // }

    // handleFormSubmit = e => {
    //     e.preventDefault()

    //     this.props.addFood(this.state)
    //     this.setState({
    //         name: '',
    //         image: '',
    //         calories: '',
    //     })
    // }

    render() {

        console.log(this.props)

        return (
            <form onSubmit={this.handleFormSubmit}>
                <label>name:</label><br />
                <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                <br /><br />

                <label>image:</label><br />
                <input type="text" name="image" value={this.state.image} onChange={this.handleInputChange} />
                <br /><br />

                <label>calories:</label><br />
                <input type="text" name="calories" value={this.state.calories} onChange={this.handleInputChange} />
                <br /><br />

                <input type="submit" value="Crear comida nueva" />
            </form>
        )
    }
}
