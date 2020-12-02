import React, { Component } from 'react'

class FoodForm extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            calories: '',
            image: '',
            // quantity: number
        }
    }

    handleInputChange = e => {
        const { name } = e.target
        const value = e.target.value
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()

        this.props.addFood(this.state)
        this.setState({
            name: '',
            calories: '',
            image: '',
        })

    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>

                <label class="label">Name</label>

                <input class="input" type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />



                <label class="label">Calories</label>

                <input class="input" type="text" name="calories" value={this.state.calories} onChange={this.handleInputChange} />



                <label class="label">Image</label>

                <input class="input" type="file" name="image" value={this.state.image} onChange={this.handleInputChange} />




                <button type="submit" class="button is-primary">Submit</button>


            </form>
        )
    }
}

export default FoodForm