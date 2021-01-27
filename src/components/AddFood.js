import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class AddFood extends Component {

    constructor(props){
        super(props);

        this.state = {
            name: '',
            calories: 0,
            image: '',
            isShown: false
        }
    }

    handleChange = (e) => {
        const propName = e.target.name;

        this.setState({
            [propName]: e.target.value,
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.NewFood({
            name: this.state.name,
            calories: this.state.calories,
            image: this.state.image
        });
        this.setState({
            name: '',
            calories: 0,
            image: '',
            isShown: false
        });
    } 

    displayForm = () => {
        const newShowForm = ! this.state.isShown;
        this.setState({
            isShown: newShowForm
        });
    }

    render() {

        const formStyle = {
            display: this.state.isShown ? 'block' : 'none'
        }
        return (
            <div>
                <button className='button is-success' onClick={this.displayForm}>{this.state.isShown ? 'Hide form' : 'Show form'}</button>
                <form onSubmit={this.handleFormSubmit} style={formStyle}>
                    <label>Name:</label>
                        <input className='input' type='text' name='name' value={this.state.name} onChange={this.handleChange} />
                    <label>Calories:</label>
                        <input className='input' type='text' name='calories' value={this.state.calories} onChange={this.handleChange} />
                    <label>Image:</label>
                        <input className='input' type='text' name='image' value={this.state.image} onChange={this.handleChange} />
                    <button className='button is-primary' type='submit'>Add</button>
                </form>
                
            </div>
        )
    }
}

export {AddFood};
