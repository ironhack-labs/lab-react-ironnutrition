import React from 'react';
import '../../App.css';
import 'bulma/css/bulma.css';
import foods from '../../foods.json'
import FoodBox from '../FoodBox/FoodBox'
import {AddFood} from '../AddFood/AddFood'


class FoodBoxList extends React.Component {

    state = {foods}

    addFoodHandler = (foodItem) => {
        const newFoods = [foodItem, ...this.state.foods]

        this.setState({
            foods: newFoods,
        })
    }

    render(){

        const FoodBoxList = this.state.foods.map(item => {
            return (
                <FoodBox image={item.image} name={item.name} calories={item.calories} quantity={item.quantity}/>
            )
        })

        return(
            <div>
                <AddFood AddFood={this.addFoodHandler}/>

                {FoodBoxList}
            </div>
        )
    }
}

export {FoodBoxList}