import React, { Component } from 'react'

export default class FormFood extends Component {

    state = {
        name: "", 
        calories: "", 
        image: "", 
        quantity: 0,
    }

    handleChange = evt => {
        this.setState({[evt.target.name] : evt.target.value})
    }

    handleSubmit = evt => {
        evt.preventDefault();
        this.props.clbk(this.state)
    }


    render() {
    return (
        <div className="form-container">
            <h2>Add your favorite food !</h2>
            <form className="food-form" onChange={this.handleChange} onSubmit={this.handleSubmit}>
                <input type="text" placeholder="name" name="name"/>
                <input type="text" placeholder="calories" name="calories"/>
                <input type="text" placeholder="image" name="image"/>
                <button className="submit-btn">ok</button>
            </form>
        </div>
    )
}
}
