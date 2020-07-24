import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleFormSubmit}>
                    <label>Food</label>
                    <input name="name" type="text" onChange={this.props.handleFormChange} />
                    <label>Calories</label>
                    <input name="calories" type="number" onChange={this.props.handleFormChange} />
                    <label >Image</label>
                    <input name="image" type="text" onChange={this.props.handleFormChange} />
                    <button>Add</button>
                </form>
            </div>
        )
    }
}
