import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            image: '',
            calories: '',
            newFood: true 
        }
    }
    handleFormSubmit = e => {
        e.preventDefault()
        this.state.insertFood(this.state)
        this.setState({
            name: '',
            image: '',
            calories: '',
            quantity: ''
        })
    }
        render() {
            
                if (this.state.newFood === true) {
                    
                    return (
                <form onSubmit={this.handleFormSubmit}>
                    <label>
                        name:
                         <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                    </label>
                    <label>
                        name:
                         <input type="text" name="image" value={this.state.image} onChange={this.handleInputChange} />
                    </label>
                    <label>
                        name:
                         <input type="text" name="calories" value={this.state.calories} onChange={this.handleInputChange} />
                            </label>
                            <button type="submit" className="button is-link">Submit</button>
                        </form>
                        
                    )
                } else {
                    return null
                    }
        }
}

export default Form;
