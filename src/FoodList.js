import { Component } from "react"
import FoodBox from "./FoodBox"
import foods from './foods.json'
import NewFood from './AddFood'


class FoodList extends Component {

    constructor() {
        super()
        this.state = {
            foods
        }
    }






    addFoodToList = newFood => {
        const foodsCopy = [...this.state.foods]
        foodsCopy.push(newFood)
        this.setState({ foods: foodsCopy })
    }


    render() {

        return (
            <>
                <h2>FoodList</h2>
                {
                    this.state.foods.map((elm, idx) => <FoodBox key={idx} {...elm} />)
                }




                <NewFood addFood={this.addFoodToList} />
            </>
        )
    }
}

export default FoodList