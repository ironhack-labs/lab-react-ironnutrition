import React, { Component } from 'react'

export default class AddFood extends Component {
    render() {
        return (
            <>
            <h1><strong>Add a Food</strong></h1>
            <form onSubmit={this.props.onAdd}>
                <input name="name" class="input is-success" type="text" placeholder="Food Name"></input>
                <input name="calories" class="input is-success" type="text" placeholder="Calories"></input>
                <input name="image" class="input is-success" type="text" placeholder="Image link"></input>
                <button type="submit" class="button is-success">Add</button>
            </form>
            </>
        )
    }
}