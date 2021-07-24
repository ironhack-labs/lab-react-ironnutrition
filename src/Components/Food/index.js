import { Component } from "react";
import foods from '../../foods.json'
import FoodBox from "../FoodBox";
import Form from "../Form";
import Search from "../Search";
import TodayFood from "../TodayFood";

class Food extends Component {
    state = {
        foods,
        form : false,
        filteredFood : foods,
        total:[]
    }
    dropForm = () =>{
       this.setState({
           form : !this.state.form
       }) 
    }
    filterFood = (foodSearch) =>{
        const filtered = this.state.foods.filter((food)=>{
            return food.name.toLowerCase().includes(foodSearch.toLowerCase())
        })
        this.setState({
            filteredFood: filtered
        })
    }
    addFood = (food) =>{
        let arrayCopy = [...this.state.foods]
        arrayCopy.push(food)
        this.setState({
            foods: arrayCopy
        })
    }
    addTotalFood = (food) =>{
        let arrayCopy = this.state.total
        arrayCopy.push(food)
        this.setState({
            total: arrayCopy
        })
    }
    render(){
        return (
            <div>
                <Search filter = {this.filterFood}/>
                {
                    this.state.form ?
                    <> 
                    <button className = 'button' onClick = {this.dropForm}>Close Form</button>
                    <Form addFood = {this.addFood} dropForm = {this.dropForm}/>
                    </>
                    :
                    <button className = 'button' onClick = {this.dropForm}>Add Food</button>
                }
                <div id= 'table' >
                    <div>
                    {this.state.filteredFood.map((food)=>{
                        return <FoodBox name = {food.name} calories = {food.calories} image = {food.image} quantity = {food.quantity} addTotalFood = {this.addTotalFood}/>
                    })}
                    </div>
                   
                    <TodayFood  addTotalFood = {this.addTotalFood} total = {this.state.total}/>
                </div>
                
            </div>
        )
    }
}

export default Food