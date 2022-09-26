import './FoodForm.css'
import { Component } from "react";

const INITIAL_STATE = {
    name: '',
    calories: '',
    servings: '',
    image: ''
  }

class FoodForm extends Component {
    state = {...INITIAL_STATE}

    handleOnChange = (event) => {
        const { value, name } = event.target
        this.setState({ [name]: value }) // meter entre corchetes una variable para hacer el key dinamico
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.addNewFood(this.state)
        this.setState({...INITIAL_STATE})
    }

    render() {
        const { name, calories, servings, image } = this.state

        return (
            <form className='app-input-container' onSubmit={this.onSubmit}>
                <h2 className="white">ADD NEW FOOD</h2>
                <input name="name" id="name" placeholder="Name" className='input'
                value={name} onChange={this.handleOnChange} required/>
                <input name="calories" id="calories" placeholder="Calories" className='input'
                value={calories} onChange={this.handleOnChange} required/>
                <input name="servings" id="servings" placeholder="Servings" className='input'
                value={servings} onChange={this.handleOnChange} required/>
                <input name="image" id="image" placeholder="Image URL" className='input'
                value={image} onChange={this.handleOnChange} required/>
                <button className='add-btn'>ADD</button>
            </form>
        )
    }
}

export default FoodForm