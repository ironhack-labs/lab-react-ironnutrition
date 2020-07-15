import React, { Component } from 'react'
import 'bulma/css/bulma.css';


class FoodForm extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            calories: '',
            image: '',
            quantity: '',
        }
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.props.insertFood(this.state)
        this.setState({
            name: '',
            calories: '',
            image: '',
            quantity: '',
            active: false,
        })
    }

  

    handleInputChange = e => {
        const name = e.target.name
        const value = e.target.value
        this.setState({ [name]: value })
    }

    switchButton = () => this.setState({ active: !this.state.active })

    render() {

        return (
            <>
                <button onClick={this.switchButton} >SHOW ME FOOD</button>
                <form style={{ display: this.state.active ? "block" : "none" }}  className="field" onSubmit={this.handleFormSubmit}>

                    <label className="label">
                        Name:
                            <input className="input" name="name" type="text" value={this.state.name} onChange={this.handleInputChange} />
                    </label>

                    <label className="label">
                        Calories:
                            <input className="input" name="calories" type="text" value={this.state.calories} onChange={this.handleInputChange} />
                    </label>

                    <label className="label">
                        Image:
                            <input className="input" name="image" type="text" value={this.state.image} onChange={this.handleInputChange} />
                    </label>

                    <label className="label">
                        Quantity:
                            <input className="input" name="quantity" type="number" value={this.state.quantity} onChange={this.handleInputChange} />
                    </label>

                    <button onClick={this.switchButton}  className="button is-link is-light">Submit!</button>
                </form>
            </>
        )
    }
}

export default FoodForm