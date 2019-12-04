import React, { Component } from 'react'
import foods from '../foods.json'
import SearchFood from './SearchFood.js'
import FoodCard from './FoodCard'
import NewFoodForm from './NewFood.js'

class Food extends Component {
    constructor(props) {
        super(props)
        this.state = {

            foods: foods,
            backup: foods,
            status: false,
            totalCalories: 0

        }
    }
    addNewFood = food => {
    const foodCopy = [...this.state.foods]
    foodCopy.push(food)
    this.setState({foods : foodCopy,  status: !this.state.status, backup: foodCopy})

    }

    addForm = () => {
        this.setState({ status: !this.state.status })

        
    }

    filterFood = (src) => {

        let filteredFoodCopy = [...this.state.backup]
        console.log(`soy filtercopy ${filteredFoodCopy}`)
        filteredFoodCopy = filteredFoodCopy.filter(e => e.name.toUpperCase().includes(src.toUpperCase()))
        // console.log(`soy pupu ${pupu}`)
        
        this.setState({foods: filteredFoodCopy})
        
        // filteredFoodCopy.filter( elm =>  
        //    this.state.statusName ? (a, b) => a.name.localeCompare(b.name) : (a, b) => b.name.localeCompare(a.name) 
        //    )

        // this.setState( 
        //     {fiveContact:sortedContactCopy, statusName: !this.state.statusName } 
        // )

    }

    render() {
		return (
            <div>
                <SearchFood searchFood={this.filterFood} />
            <div>
                { this.state.foods.map((elm,idx) => <FoodCard {...elm} key={idx} />) }
           </div>
           
           <div>
               <button onClick={this.addForm}>View form</button>
           </div>
           <div>
                {this.state.status ? <NewFoodForm includeFood={this.addNewFood}/> : ""}
           </div>
           </div>
            )
        }

}

export default Food