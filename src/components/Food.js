import React, { Component } from 'react';
import FoodBox from './FoodBox';
import AddForm from './AddForm';


class Foods extends Component {

    state = {
        showForm: false
    };

    handleClick = () => {
        this.setState({
            showForm: true
        })
    };

    handleAddFood = (event) => {
        event.preventDefault();

        this.setState({
            showForm:false
        })

        let newFood = {
            name: event.target.name.value,
            calories: event.target.calories.value,
            image: event.target.image.value
        }
        this.props.onAddNewFood(newFood)

    }

    render() {

        const {foods} = this.props;
        const {showForm} = this.state;
        return (
            <div>
                <h2 class="subtitle">Foods</h2>
                {
                    showForm ? <AddForm onAddFood = {this.handleAddFood} /> : <button onClick={this.handleClick} >Show Form</button>

                }
                {
                foods.map((food, i) => {
                    return <FoodBox 
                        key = {i}
                        myFood = {food}
                    />
                })
                }
                
            </div>
        )
    }
}
export default Foods;