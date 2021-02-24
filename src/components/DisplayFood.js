import React from 'react'
import FoodBox from './FoodBox'
import { Component } from 'react'
import foods from '../foods.json'
import AddFoodForm from './AddFoodForm'

class FoodList extends Component {

    constructor() {
        super()
            this.state = {
                list: foods
            }
    }

    addFood(food){       
        const copyFoods= [...this.state.list]
        copyFoods.push(food)
        this.setState({ list: copyFoods })
    }

    render(){
        return(
            <>

               {this.state.list.map(elm => <FoodBox {...elm} />)}
                <AddFoodForm addFood={food => this.addFood(food)} />
               

            </>
        )
    }


}

export default FoodList