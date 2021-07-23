import React, { Component } from 'react';

export default class FoodForm extends Component {
    state = {
        name:'',
        calories:'',
        image:''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addFood(this.state)
        this.setState({
            name: '',
            calories: '',
            image: ''
        })
    }

    render() {
        return (
           <form onSubmit={this.handleSubmit}>
               <input
                    className='input'
                    placeholder='Food name' 
                    type='text' 
                    value={this.state.name} 
                    name='name'
                    onChange={this.handleChange}
               />
                <input
                    className='input'
                    placeholder='Calories'
                    type='number'
                    value={this.state.calories}
                    name='calories'
                    onChange={this.handleChange}
                />
                <input
                    className='input'
                    placeholder='Image URL'
                    type='text'
                    value={this.state.image}
                    name='image'
                    onChange={this.handleChange}
                />
                <button className='button' type='submit'>Add</button>
                
           </form> 
        )
    }
}

