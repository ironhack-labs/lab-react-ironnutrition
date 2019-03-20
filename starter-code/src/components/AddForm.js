import React, { Component } from 'react';

class AddForm extends Component {

    constructor(props) {

        super(props)

        this.state = {
            name: '',
            calories: '',
            image: '',
            quantity: 0

        }
    }

    handleChange = e => {
        let { name, value } = e.target;
        this.setState({ [name]: value });
    }



    handleFormSubmit = e => {
        e.preventDefault()
        this.props.addFood(this.state)
        this.setState({
            name: '',
            calories: '',
            image: '',
            quantity: 0
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleFormSubmit(e)}>
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} /><br></br><br></br>

                    <label>Calories:</label>
                    <input type="text" name="calories" value={this.state.calories} onChange={(e) => this.handleChange(e)} /><br></br><br></br>

                    <label>Image:</label>
                    <input type="text" name="image" value={this.state.image} onChange={(e) => this.handleChange(e)} /><br></br><br></br>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default AddForm;
