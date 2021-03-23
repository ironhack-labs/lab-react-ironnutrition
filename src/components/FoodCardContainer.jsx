import React, {Component} from 'react'
import data from '../data/foods.json'

//components
import FoodCard from './FoodCard'

let uniqid = require('uniqid');


class FoodCardContainer extends Component{
    state ={
        foods: [...data]
    }

    render(){
        return(
            
            <div className="food__card__container container">
                <div className="row">
                    {this.state.foods.map(food => (
                        <div className="col" key={uniqid(this.name)}>
                            <FoodCard {...food}/>
                        </div>
                    ))}
                </div>
            </div>
        )

    }
}

export default FoodCardContainer