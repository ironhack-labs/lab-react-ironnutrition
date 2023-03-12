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

/* handleFormSubmit = (e) => {
e.preventDefault()
this.props.
}

addFood = newFood => this.setState({
    ...this.state,
}) */

    render() {
        return(
            <div className='AddFoodForm'>
                <form onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <label for="name">Food name</label>
                        <input type="text" class="form-control" value={this.state.name} placeholder="Food name" />
                    </div>
                    <div className="form-group">
                        <label for="calories">Total calories</label>
                        <input type="text" class="form-control" value={this.state.calories} placeholder="Calories" />
                    </div>
                    <div className="form-group">
                        <label for="servings">Servings</label>
                        <input type="text" class="form-control" value={this.state.servings} placeholder="Servings" />
                    </div>
                    <div className="form-group">
                        <label for="image">Image</label>
                        <input type="text" class="form-control" value={this.state.image} placeholder="image URL" />
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddFoodForm;