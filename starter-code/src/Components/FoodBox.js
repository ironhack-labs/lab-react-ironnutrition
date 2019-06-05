import React, {Component} from 'react'
import foods from '../foods.json'
import FoodCard from './FoodCard'


class FoodBox extends Component {

    constructor(){
        
        super()

            this.state={ourFood: foods}
        
    }
    
    

    render(){
        return(
            <div>
            {this.state.ourFood.map( (food, idx) => <FoodCard key={idx} {...food} /> ) }
            </div>
        )

    }
}

export default FoodBox 

