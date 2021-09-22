import React, { Component } from 'react'

export default class NewFood extends Component {

    state={
        name:'',
        calories:0,
        image:'',
        quantity:0
    }
    handleSubmit =(e) =>{
        e.preventDefault()
        this.props.addFood(this.state)
        
    }
    handleNameChange=(e) => {
        const {value}=e.target
        this.setState({
            ...this.state,
            name:value
        })
    }
    handleCalorieChange=(e) => {
        const {value}=e.target
        this.setState({
            ...this.state,
            calories:value
        })
    }
    handleImageChange=(e) => {
        const {value}=e.target
        this.setState({
            ...this.state,
            image:value
        })
    }
    render() {
        return (
           <form onSubmit ={(e)=>this.handleSubmit(e)}>
               <label>Nombre:<input type='text' value={this.state.name} name='name' onChange={e=>this.handleNameChange(e)}></input>
               </label>
               <label>Calories:<input type='number' value={this.state.calories} name='calories' onChange={e=>this.handleCalorieChange(e)}></input></label>
               <label>Image:<input type='text' value={this.state.image} name='image' onChange={e=>this.handleImageChange(e)}></input></label>
            <input type="submit" value='Añadir comida'/>
           </form>
        )
    }
}
