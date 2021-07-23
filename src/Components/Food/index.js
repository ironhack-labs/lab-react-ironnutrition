import { Component } from "react";
import foods from '../../foods.json'
import FoodBox from "../FoodBox";
import Form from "../Form";

class Food extends Component {
    state = {
        foods,
        form : false,
    }
    dropForm = () =>{
       this.setState({
           form : !this.state.form
       }) 
    }
    addFood = (food) =>{
        let arrayCopy = [...this.state.foods]
        arrayCopy.push(food)
        this.setState({
            foods: arrayCopy
        })
    }
    render(){
        return (
            <div>
                {
                    this.state.form ?
                    <> 
                    <button className = 'button' onClick = {this.dropForm}>Close Form</button>
                    <Form addFood = {this.addFood} dropForm = {this.dropForm}/>
                    </>
                    :
                    <button className = 'button' onClick = {this.dropForm}>Add Food</button>
                }
                
                {this.state.foods.map((food)=>{
                    {console.log('aqui')}
                    return <FoodBox name = {food.name} calories = {food.calories} image = {food.image} quantity = {food.quantity}/>
                })}
            </div>
        )
    }
}

export default Food