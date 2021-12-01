import React, { Component } from 'react'

export default class AddNewFood extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            quantity: 0,
            calories: "",
            image: ""
        }
    }

    handleChange = (e) => {
        let { name, value} = e.currentTarget

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.addFood(this.state)
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit} className="new-food-form">

                <label>
                    Name: <input onChange={this.handleChange} value={this.state.name} type="text" name="name" />
                </label>  <br />

                {/* <label>
                    Quantity: <input onChange={this.handleChange} value={this.state.quantity} type="number" name="quantity" />
                </label> */}

                <label>
                    Calories: <input onChange={this.handleChange} value={this.state.calories} type="number" name="calories" />
                </label>  <br />

                <label>
                    Image: <input onChange={this.handleChange} checked={this.state.image} type="text" name="image" />
                </label>  <br />

                <input type="submit" value="Create food" />
            </form>
        )
    }
}
