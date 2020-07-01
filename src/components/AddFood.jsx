import React, { Component } from 'react';
import './AddFood.css'

export default class AddFood extends Component {
    constructor(props) {
        super(props);
        this.setName = this.setName.bind(this);
        this.setCalories = this.setCalories.bind(this);
        this.setImage = this.setImage.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    state = {
        image: "",
        name: "",
        calories: "",
        quantity: 0
    }

    setName(e) {
        this.setState({
            name: e.target.value
        })
    }

    setCalories(e) {
        this.setState({
            calories: e.target.value
        })
    }

    setImage(e) {
        this.setState({
            image: e.target.value
        })
    }

    handleFormSubmit(e) {
        e.preventDefault();
        this.props.addFood(this.state);
        this.setState({
            image: "",
            name: "",
            calories: "",
            quantity: 0
        })
    }

    render() {
        return (
            <div>

                <form className="form" onSubmit={this.handleFormSubmit}>
                    <input
                    type="text" class="input"
                    onChange={this.setName}
                    value={this.state.name}
                    placeholder="Name"
                    name="name" />
                    <input
                    type="text" class="input"
                    onChange={this.setCalories}
                    value={this.state.calories}
                    placeholder="Calories"
                    name="calories" />
                    <input
                    type="text" class="input"
                    onChange={this.setImage}
                    value={this.state.image}
                    placeholder="Image URL"
                    name="image" />
                    <input class="button is-info" type="submit" value="Save" />
                </form>
            </div>
        )
    }
}
