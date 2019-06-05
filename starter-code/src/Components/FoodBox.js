import React, {Component} from 'react'
import foods from '../foods.json'
import FoodCard from './FoodCard'
import AddFood from './ButtonAdd'

import {Link} from 'react-router-dom'

class FoodBox extends Component {

    constructor(){
        
        super()

            this.state={
                ourFood: foods,
                isOpen: false,
            }   

    }
    
    addNewFood=food=>{
        const _ourFood=[...this.state.ourFood]
        _ourFood.push(food)
        this.setState({
            ourFood:_ourFood
        })

    }

    showForm = () => {
        this.setState({
            isOpen : !this.state.isOpen
        })
    }   

    render(){
        return(
            <div>
            {this.state.ourFood.map( (food, idx) => <FoodCard key={idx} {...food}  addNewFood={()=>this.addNewFood}/> ) }
            <button type="button" onClick={this.showForm}>AHORA SÍ SE VE</button>
            {this.state.isOpen && <AddFood addNewFood={this.addNewFood}></AddFood>}
            </div>
        )

    }
}

export default FoodBox 

