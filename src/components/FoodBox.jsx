import React, { Component } from 'react'
import AddForm from './AddForm';
import FoodList from './FoodList';

class FoodBox extends Component {
    
    state = {
        showForm: false
    }

    handleAddFood = (event) => {
        event.preventDefault()
        const {name, calories, image} = event.target

        let newFood = {
            name: name.value,
            calories: calories.value,
            image: image.value
        }

        this.setState({
            showForm: false
        })

        this.props.onAddNewFood(newFood)
    }

    clickHandler = () => {
        this.setState({
            showForm: true
        })
    }

    render() {
        const {foods} = this.props
        const {showForm} = this.state
        return (
            <div>
                {
                  showForm? <AddForm onAddFood={this.handleAddFood}/> : <button onClick={this.clickHandler} className="button is-info" >Show Form</button> 
                } 
                  
                
                {
                    foods.map((food, i) => {
                        return <FoodList food={food} onAddTotal={this.props.onAddTotal}/>
                    })
                }
                
            </div>
        )
    }
}
export default FoodBox;