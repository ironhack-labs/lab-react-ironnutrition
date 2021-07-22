import { Component } from "react";
import Box from "./Box.js"
import foodList from "../foods.json"

class Foodbox extends Component {
    state = {
        foodList = foodList,
    }
    
    listFood  () {
        const newFoodList = [...this.state.foodList]

        newFoodList.map()
    }

    render () {

        return (
            <>
                <Box/>
            </>
        )
    }


}

export default Foodbox