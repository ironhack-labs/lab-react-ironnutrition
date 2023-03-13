import './index.css'
import React, { Component } from 'react'

class AddFoodForm extends Component{
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            calories: '',
            image: '',
            servings: ''
        }
    }

handleFormSubmit = (e) => {
e.preventDefault()
console.log('entro')
this.props.addNewFood(this.state)
}

handleNameChange = (e) => {
    this.setState({
        name: e.target.value
    })
}

handleCaloriesChange = (e) => {
    this.setState({
        calories: e.target.value
    })
}

handleServingsChange = (e) => {
    this.setState({
        servings: e.target.value
    })
}

handleImageChange = (e) => {
    this.setState({
        image: e.target.value
    })
}


/* addFood = newFood => this.setState({
    ...this.state,
}) */

    render() {
        return(
            <div className='AddFoodForm'>
                <form onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Food name</label>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.handleNameChange} placeholder="Food name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="calories">Total calories</label>
                        <input type="text" className="form-control" value={this.state.calories} onChange={this.handleCaloriesChange} placeholder="Calories" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="servings">Servings</label>
                        <input type="text" className="form-control" value={this.state.servings} onChange={this.handleServingsChange} placeholder="Servings" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image</label>
                        <input type="text" className="form-control" value={this.state.image} onChange={this.handleImageChange} placeholder="image URL" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddFoodForm;