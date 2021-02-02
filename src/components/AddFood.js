import React, { Component } from 'react'

class AddFood extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: false,
            name: '',
            calories: 0,
            image: ''
        }
    }

    displayForm = () => {
        const newShowForm = !this.state.showForm;
        this.setState({ showForm: newShowForm })
    }

    handleChange = (e) => {
        const propertyName = e.target.name
        this.setState({
            [propertyName]: e.target.value
        })
    }

    handleSubmission = (e) => {
        e.preventDefault()

        this.props.addFood({
            name: this.state.name,
            calories: this.state.calories,
            image: this.state.image
        })

        this.setState({
            showForm: false,
            name: '',
            calories: 0,
            image: ''
        });
    }

    render() {
        const formStyle = {
            display: this.state.showForm ? "block" : "none"
        }

        return (
            <div>
                <button onClick={this.displayForm}>{this.state.showForm ? "Hide form" : "Display form"}</button>

                <form onSubmit={this.handleSubmission} style={formStyle}>
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />

                    <label>Calories:</label>
                    <input type="number" name="calories" value={this.state.calories} onChange={this.handleChange} />

                    <label>Image:</label>
                    <input type="text" name="image" value={this.state.image} onChange={this.handleChange} />

                    <button>Submit</button>

                </form>
            </div>
        )
    }
}

export default AddFood;