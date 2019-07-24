import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            calories: '',
            image: '',
            quantity: '',
        }
    }

    formHandler(event) {
        event.preventDefault();
        this.setState({
            calories: parseInt(this.state.calories),
            quantity: parseInt(this.state.quantity)
        })
        this.props.addFood(this.state);
        this.props.hideForm();
    }

    inputHandler(event) {
        let { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return(
            <form onSubmit={(e) => this.formHandler(e)}>
            <label>Food name:</label>
                <input className="input" type="text" name="name" value={this.state.name} onChange={(e) => this.inputHandler(e)} />
                <label>Calories:</label>
                <input className="input" type="number" name="calories" value={this.state.calories} onChange={(e) => this.inputHandler(e)} />
                <label>Quantity:</label>
                <input className="input" type="number" name="quantity" value={this.state.quantity} onChange={(e) => this.inputHandler(e)} />
                <label>Image:</label>
                <input className="input" type="text" name="image" value={this.state.image} onChange={(e) => this.inputHandler(e)} />
                
                <input type="submit" value="Submit" />
            </form>
        )
    }

}

export default Form;