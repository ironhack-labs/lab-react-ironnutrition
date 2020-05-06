import React, { Component } from 'react'

class Button extends Component {

    constructor(props) {
        super(props)
        this.state = {
            image: '',
            name: '',
            calories: ''
        }
    }

    handleFormSubmit = e => {
        e.preventDefault()

        this.props.addNewFood(this.state)
        this.setState({
            image: '',
            name: '',
            calories: ''false''
        })
    }


    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <label>
                    <input name="image" value={this.state.image} onChange={this.handleChange} type="image" />
                </label>
                <label>
                    <input name="name" value={this.state.name} onChange={this.handleChange} type="text" />
                </label>
                <label>
                    <input name="calories" value={this.state.calories} onChange={this.handleChange} type="text" />
                </label>
            </form>
        )
    }
}

export default Button