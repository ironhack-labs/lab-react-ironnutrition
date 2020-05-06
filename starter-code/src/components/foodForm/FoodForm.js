import React, { Component } from 'react'


class FoodForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            calories: "",
            image: ""
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleFormSubmit = e => {
        e.preventDefault()


    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <label>
                    Name:
                     <input name="name" value={this.state.name} onChange={this.handleChange} type="text"/>
                </label>
                <br />
                <label>
                    Calories:
                     <input name="calories" value={this.state.calories} onChange={this.handleChange} type="text"/>
                </label>
                <br />
                <label>
                    Image:
                     <input name="image" value={this.state.image} onChange={this.handleChange} type="text"/>
                </label>
                <br/>
                <button type="submit">Add Food</button>
            </form>
        )
    }

}
export default FoodForm