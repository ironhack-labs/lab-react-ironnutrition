import React from 'react';
import './index.css'
import FoodBox from '../FoodBox';

class FoodList extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            foodList: props.foods
        }
    }

    renderFoods = () => {
        return this.state.foodList.map((food) => {
            return (
            <div key={food.name} >
                <FoodBox name={food.name} calories={food.calories} 
                image={food.image} servings={food.servings}
                />
            </div>
            )
        })
    }

    render() {
        return (
            <div className='FoodList'>
                <h1>Food List</h1>
                <div className='RenderFoods'>
                {this.renderFoods()}
                </div>
               
            </div>
        )
    }
}

export default FoodList;