import React, { Component } from 'react'
import FoodList from './FoodList'
export default class AddNewFood extends Component {
    state = {
        name: '',
        calories: '',
        image: '',
        quantity: 0
    }
    submit = e => {
        e.preventDefault()
        this.props.AddNewFood(this.state)
        this.setState({
            title: '',
            calories: '',
            image: "",
            quantity: 0
        })
        console.log('submit')
    }
    handleChange = e =>{
        const { target: {name, value} } = e
        this.setState({
            [name]: value
        })
    }
    addFood = (food) =>{
        console.log('añadir comida', food)
        this.setState(({movieList})=>({movieList: [...movieList, movie]})) 
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submit}>
                    <label htmlFor="name">Food Name</label>
                    <input onChange={this.handleChange} type="text" name="name" value={this.state.name}/>
                    <label htmlFor="calories">Calories</label>
                    <input onChange={this.handleChange} type="number" name="calories" value={this.state.calories}/>
                    <label htmlFor="image">rate</label>
                    <input onChange={this.handleChange} type="text" name="image" value={this.state.image}/>
                    <label htmlFor="quantity">Quantity</label>
                    <input onChange={this.handleChange} type="number" name="quantity" value={this.state.quantity}/>
                    <input type="submit" value="Add"/>
                </form> 
            </div>
        )
    }
}
