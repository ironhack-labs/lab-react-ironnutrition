import React, { Component } from 'react'

class NewFood extends Component {

    state = { }


    // Get info from form and set the state
    setForm = (e) => {
        this.setState({
            [e.target.name]:e.target.value,
            quantity: 0
        })
    }

    // Call function in parent component to add the food when form is submitted
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addGoodFood(this.state);
    }

    render () {
        return (
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input type='text' name='name' onChange={this.setForm}></input>

                    <label>Calories</label>
                    <input type='number' name='calories' onChange={this.setForm}></input>

                    <label>Image</label>
                    <input type='text' name='image' onChange={this.setForm}></input>

                    <button type='submit'>Submit</button>
                </form>

        )
    }
}

export default NewFood