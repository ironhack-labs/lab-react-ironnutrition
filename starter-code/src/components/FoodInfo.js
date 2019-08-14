import React, {Component} from 'react'

import foods from '../foods.json'
import FoodBox from './FoodBox'
import AddFood from './AddFoodForm'
import SearchBar from './Search'

class FoodInfo extends Component {
    constructor(){
        super()

        this.state = {
            foods: foods, 
            copy: foods }
    }

    addQuantity = () => {
        const copyfoods = [...this.state.foods]


    }

    addOneFood = food => {
        const copyfoods = [...this.state.foods]

        copyfoods.push(food)
        this.setState({
            foods: copyfoods,
            copy: copyfoods
        })
        console.log(foods)
    }

    findFood = search => {
        
        let copyfoods = [...this.state.copy]
        
        copyfoods = foods.filter( elm => { 
           return  elm.name.includes(search)
        })

        this.setState({
            copy: copyfoods,
            foods:copyfoods
        })

    }

    render() {
        return(
           
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                <AddFood addFood={this.addOneFood}/>
                <SearchBar findFood={this.findFood}/>
                <div >
                    {
                        this.state.foods.map((elm,idx) => {
                            return <FoodBox key={idx} {...elm}  />
                        })
                    }

                </div>
                </div>
                
                <div className="col-md-4">
<h2>BUBUBUBUUBUB</h2>
                </div>

                </div>

                </div>
           
        )
    }
}





export default FoodInfo