import foods from './../../foods.json'
import { Component } from 'react'
import FoodCard from './FoodCard'
import FoodForm from './FoodForm'

class FoodBox extends Component {
    constructor() {
        super()
        this.state = {
            foodList: foods
        }
    }

    insertNewFood = newFood => {
        const foodCopy = [...this.state.foodList]
        foodCopy.push(newFood)
        this.setState({foodList:foodCopy})
    }

    render() {
        return (
            <section>
                <FoodForm addFodd={ this.insertNewFood }/>

                {this.state.foodList.map((elm, idx) => <FoodCard key={idx} {...elm} />)}
            </section>

        )
    }
}

export default FoodBox;