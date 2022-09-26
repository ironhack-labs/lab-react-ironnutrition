import React, { Component } from 'react'

const INITIAL_STATE = {
    name: '',
    calories: '',
    image: '',
    servings: ''
}

class FoodForm extends Component{
    state = {...INITIAL_STATE}

    handleOnChange = (event) => {
        console.log(event);
        const { value, name } = event.target 

        this.setState({ [name]: value })
    }

    onSubmit = (event) => {
        event.preventDefault()

        this.props.createFood(this.state)
        this.setState({ ...INITIAL_STATE})
    }

    render() {
        const { name, calories, img } =this.state
        return(
            <form style={{marginTop: '5rem'}} onSubmit={this.onSubmit}>
                <input name='name' id='name' value={name} onChange={this.handleOnChange} placeholder='Name of the food' required/>
                <input name='calories' id='calories' value={calories} onChange={this.handleOnChange} placeholder='Quantity of calories' required/>
                <input name='image' id='image' value={img} onChange={this.handleOnChange} placeholder='Url de la imagen' />
                <button>Submit</button>
            </form>
        )
    }
}

export default FoodForm