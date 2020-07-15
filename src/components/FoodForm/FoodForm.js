import React, { Component } from 'react'

import FoodBox from '../FoodBox/FoodBox'

class FoodForm extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            calories: '',
            image: ''
        }
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.props.insertFood(this.state)
        this.setState({
            name: '',
            calories: '',
            image: ''
        })
    }

    handleInputChange = e => {
        const name = e.target.name
        const value = e.target.value
        this.setState({ [name]: value })
    }

    render() {

        return (
            <>
                <form onSubmit={this.handleFormSubmit}>

                    <label>
                        Name:
                        <input name="name" type="text" value={this.state.name} onChange={this.handleInputChange} />
                    </label> <br></br>

                    <label>
                        Calories:
                        <input name="calories" type="number" value={this.state.calories} onChange={this.handleInputChange} />
                    </label><br></br>

                    <label>
                        Image url:
                        <input name="image" type="text" value={this.state.image} onChange={this.handleInputChange} />
                    </label><br></br>

                    <button onClick={() =>
                        <FoodBox />}>¡Enviar!</button>
                </form>
            </>
        )
    }
}

export default FoodForm