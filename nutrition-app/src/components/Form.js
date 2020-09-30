import React, { Component } from 'react'
import foods from '../foods.json';


class Form extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            calories: '',
            image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcocina-casera.com%2Fwp-content%2Fuploads%2F2016%2F11%2Fhamburguesa-queso-receta.jpg&imgrefurl=https%3A%2F%2Fcocina-casera.com%2Fhamburguesa-con-queso%2F&tbnid=Q9RB8Kn0PTSX5M&vet=12ahUKEwj47unhnZHsAhUG1IUKHRvjDd8QMygBegUIARDzAQ..i&docid=pGcGJe4IP0xyBM&w=700&h=467&q=hamburguesa&safe=active&ved=2ahUKEwj47unhnZHsAhUG1IUKHRvjDd8QMygBegUIARDzAQ'
        }
    }
    handleInputChange = e => {

        let { name } = e.target

        let value = e.target.value
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
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
            <form onSubmit={this.handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                <br /><br />

                <label>Calories:</label>
                <input type="text" name="calories" value={this.state.calories} onChange={this.handleInputChange} />
                <br /><br />

                <input type="submit" value="submit" />
            </form>
        )
    }
}

export default Form