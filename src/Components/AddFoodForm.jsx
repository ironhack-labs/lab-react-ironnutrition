import React, { Component } from 'react'

class AddFoodForm extends Component {
    state = {
        name: "",
        calories: 0,
        image: ""
    }
    handleChange = (evt) => {
        this.setState({ [evt.target.id] : evt.target.value})
    }
    handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.addFood({
            name: this.state.name,
            calories: this.state.calories,
            image: this.state.image
        });
        this.props.renderForm(false)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input onChange={this.handleChange} value={this.state.name} id="name" type="text"/>
                <label htmlFor="calories">Calories</label>
                <input onChange={this.handleChange} value={this.state.calories} id="calories" type="number"/>
                <label htmlFor="image">Image</label>
                <input onChange={this.handleChange} value={this.state.image} id="image" type="text"/>
                <button>OK</button>
            </form>
        )
    }
}

export default AddFoodForm

