import React, { Component } from 'react';


export default class AddFood extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            calories: '',
            image: '',
            addNewFood: false,
        }
    }

    toggleNewFood = () => {
        this.setState({ addNewFood: !this.state.addNewFood })
      }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.addFood(this.state);
        this.setState({
            name: '',
            calories: '',
            image: '',
            addNewFood: false,
        })
    }
    handleChange = (event) => {
        let {name, value} = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const formular =
            <form onSubmit={this.handleFormSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />

                    <label>Calories:</label>
                    <input type="text" name="calories" value={this.state.calories} onChange={this.handleChange} />

                    <label>Image-Url:</label>
                    <input type="url" name="image" value={this.state.image} onChange={this.handleChange} />

                    <input type="submit" value="Submit" />
                </form>
        return (
            <div>
                <button onClick={this.toggleNewFood}>Add new Food</button>
                {this.state.addNewFood ? formular : <p></p>}
            </div>
        )
    }
}
