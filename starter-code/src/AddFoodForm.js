import React, { Component } from 'react';

export class AddFoodForm extends Component {

    state = {
        name: "",
        calories: 0,
        quantity: 0
    }

    changeHandler = (event) => {
        const inputName = event.target.name
        this.setState({
            [inputName]: event.target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault()
        this.props.onNewFood(this.state)
    }

    render() {
        return (
            <div className="box">
                <form onSubmit={this.submitHandler}>
                    <input
                        name="name"
                        placeholder="name"
                        onChange={this.changeHandler} />
                    <input
                        name="calories"
                        placeholder="calories"
                        onChange={this.changeHandler} />
                    <input
                        name="quantity"
                        placeholder="quantity"
                        onChange={this.changeHandler} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
};

export default AddFoodForm