import React, { Component } from 'react';

class AddFoodForm extends Component {

        constructor () {
            super()
            this.state = {
                name: '',
                calories: '',
                image: '',
                quantity: '',
                id: Math.random(),
                display: true
            }
        }

    handleInputChange = e => {
        let {name} = e.target
        this.setState({ [name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()

        this.props.addFood(this.state)

        this.setState ({
            name: '',
            calories: '',
            image: '',
            quantity: '',
            id: Math.random(),
            display: false
        })

        this.props.toggleForm()



    }



    

    render() {

        return (
            <form className='visible' onSubmit={this.handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                <br /><br />

                <label>Calories:</label>
                <input type="text" name="calories" value={this.state.calories} onChange={this.handleInputChange} />
                <br /><br />

                <label>Imagen:</label>
                <input type="text" name="image" value={this.state.image} onChange={this.handleInputChange} />
                <br /><br />

                <label>Cantidad:</label>
                <input type="number" name="quantity" value={this.state.quantity} onChange={this.handleInputChange} />
                <br /><br />
                
                <input type="submit" value="Submit" />

            </form>
        )}
    
        
}

export default AddFoodForm