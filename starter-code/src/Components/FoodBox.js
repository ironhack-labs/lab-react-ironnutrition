import React, {Component} from 'react'
import foods from '../foods.json'
import FoodCard from './FoodCard'
import AddFood from './ButtonAdd'
import Search from './Search'

class FoodBox extends Component {

    constructor(){
        
        super()

            this.state={
                ourFood: foods,
                ourFilteredFood: [],
                isOpen: false,
            }   

    }
    
    addNewFood=food=>{
        const _ourFood=[...this.state.ourFood]
        _ourFood.push(food)
        this.setState({
            ourFood:_ourFood,
          

        })

    }

    showForm = () => {
        this.setState({
            isOpen : !this.state.isOpen
        })
    }
    
    showSearch=result=>{
        let filtered = this.state.ourFood.filter(elm => {
            console.log(elm.name,result)
            return elm.name.toLowerCase().includes(result)
        })
        console.log(filtered)
        this.setState({
            ourFilteredFood: filtered
        })
    }

    render(){
        return(
            <div>
            <Search searching={this.showSearch}/>   
            {this.state.ourFilteredFood.length ?
            
            
            this.state.ourFilteredFood.map( (food, idx) => <FoodCard key={idx} {...food}  addNewFood={()=>this.addNewFood}/>)

            :

            this.state.ourFood.map( (food, idx) => <FoodCard key={idx} {...food}  addNewFood={()=>this.addNewFood}/>)
            } 

            <button type="button" onClick={this.showForm}>AHORA SÍ SE VE</button>
            {this.state.isOpen && <AddFood addNewFood={this.addNewFood}></AddFood>}
            </div>
        )

    }
}

export default FoodBox 

