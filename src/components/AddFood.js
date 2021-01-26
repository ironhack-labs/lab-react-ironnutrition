import React, { Component } from 'react'

 class AddFood extends Component {

    constructor(props){
        super(props);
        this.state = {
            showForm: false,
            name: '',
            calories: 0,
            image: ''
        }
    }

    handleChange = (event) => {
        const propertyName = event.target.name
        this.setState({
            [propertyName]: event.target.value
        })
    }

    handleFormSubmission = (event) => {
        event.preventDefault()
        this.props.addFood({
            name: this.state.name,
            calories: this.state.calories,
            image: this.state.image,
        })
        this.setState({
            showForm: false,
            name: '',
            calories: 0,
            image: ''
        });
    }

    displayForm = () => {
        const newShowForm = ! this.state.showForm;
        this.setState({
            showForm: newShowForm
        });
    }

    render() {
        const formStyle = {
            display: this.state.showForm ? "block" : "none"
        }
        return (
            <div>
            <div class="notification is-primary">
                <button onClick={this.displayForm} className="button is-primary is-rounded is-inverted">
                    { this.state.showForm ? "X" : "Display form" }                
                </button>

                
                    <form onSubmit={this.handleFormSubmission} style={formStyle}>
                        <label>Name:</label>
                            <input className="input is-primary" type='text' name='name' value={this.state.name} onChange={this.handleChange} ></input>

                        <label>Calories:</label>
                            <input className="input is-primary" type='text' name='calories' value={this.state.calories} onChange={this.handleChange}></input>

                        <label>Image:</label>
                            <input className="input is-primary" type='text' name='image' value={this.state.image} onChange={this.handleChange}></input>

                        <button className="button is-primary is-rounded is-inverted m-3">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddFood