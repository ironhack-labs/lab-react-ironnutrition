import React, { Component } from 'react'

export default class AddNewFood extends Component {
    
    state = {
        name: '',
        calories:'',
        image:''
        
    }

    changeHandler = (e) => {
        const {name,value } = e.target
        this.setState({[name]:value})
    }
    submitHandler = (e) => {
        e.preventDefault()
        this.props.addFoodItem(this.state)
        this.props.toggleVisibility()
        this.setState({
            name:'',
            calories:'',
            image:''
           
        })
        
    }
    
    
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                  <label htmlFor='name'>Name</label>
                  <input type='text' name='name' value={this.state.name} onChange={this.changeHandler}></input>
                  <label htmlFor='calories'>Calories</label>
                  <input type='number' name='calories' value={this.state.calories} onChange={this.changeHandler}></input>
                  <label htmlFor='image'>Image</label>
                  <input type='url' name='image' value={this.state.image} onChange={this.changeHandler}></input>
                  <input type='submit' value='submit'></input>
                </form>
            </div>
        )
    }
}


