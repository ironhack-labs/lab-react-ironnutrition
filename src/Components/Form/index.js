import { Component } from "react";

class Form extends Component{
    state = {
        name: '',
        calories:0,
        image : '',
        quantity:0
    }
    handleChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    handleSubmit = (event) =>{
        event.preventDefault()
        this.props.addFood(this.state)
        this.setState({
            name: '',
            calories:0,
            image : ''
        })
        this.props.dropForm()
    }
    render(){
        return(
            <form onSubmit ={this.handleSubmit}>
                <input className='input' type ='text' placeholder ='Food name' name='name' value={this.state.name} onChange = {this.handleChange}></input>
                <input className='input' type ='number' placeholder ='Calories' name= 'calories' value={this.state.calories} onChange = {this.handleChange}></input>
                <input className='input' type ='text' placeholder ='Image URL' name='image' value={this.state.image} onChange = {this.handleChange}></input>
                <button type = 'submit' className= 'button'>Add Food</button>
            </form>
        )
    }
}

export default Form