import React, { Component } from 'react';
import AddFood from './AddFood';
import Search from './Search';
import FoodDetail from './FoodDetail';

class FoodBox extends Component {

    state = {
        showForm: false
    }

    handleClick = () => {
        this.setState({
            showForm: true
        })
    }

    handleAddFood = (event) => {
        const { onAddNewFood } = this.props;
        
        event.preventDefault();

        let newFood = {
            name: event.target.name.value,
            calories: event.target.calories.value,
            image: event.target.image.value
        }

        onAddNewFood(newFood);

        this.setState({
            showForm: false
        })
    }

    render() {
        const { foods, onSearch, onTodaysFood, onDelete } = this.props;
        const { showForm } = this.state;

        return (
            <div className="has-text-centered">
                {
                    showForm ? <AddFood onAddFood={this.handleAddFood} /> :
                    <button className="button is-success is-size-5 my-3" onClick={this.handleClick}>
                        Show Form
                    </button>
                }
                <Search onSearch={onSearch}/>
                {
                    foods.map((food, index) => {
                        return (
                            <FoodDetail
                                key={index}
                                food={food}
                                onTodaysFood={onTodaysFood}
                            />
                        );
                    })
                }
            </div>
        )
    }
}

export default FoodBox;