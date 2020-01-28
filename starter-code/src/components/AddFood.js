import React, { Component } from 'react';

class AddFood extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            calories: '',
            image: '',
            quantity: 0
        }
    }

    formSubmitHandler = (event) => {
        event.preventDefault();
        this.props.addSomeFood(this.state);
        this.setState({
            name: '',
            calories: '',
            image: '',
            quantity: 0
        });
        this.props.toggleForm(this.state)
    }
    
    handleChange = (event) => {
        let { name, value } = event.target;        
        this.setState({ [name]: value });
    }

    
    render() {
        return (
            <div>
                <form onSubmit={this.formSubmitHandler}>
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />                                        

                    <label>Number of Calories:</label>
                    <input type="number" name="calories" value={this.state.calories} onChange={this.handleChange} />

                    <label>Image:</label>
                    <input type="text" name="image" value={this.state.image} onChange={this.handleChange} />
                    
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }

}

export default AddFood;