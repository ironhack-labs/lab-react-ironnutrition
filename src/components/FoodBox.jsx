import React from 'react'
import FoodCard from './FoodCard'

export default class FoodBox extends React.Component {

    render() {
        return (
            <div className="food-list">
                {this.props.foods.map((food, index) =>
                    <FoodCard addFoodList={this.props.addFoodList} foodElem={food} index={index} key={food.name} />
                )}
            </div>
        )
    }
}
