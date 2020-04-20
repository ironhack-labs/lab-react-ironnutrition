import React, { Component } from 'react';
import foods from '../foods.json'
import AddFood from './AddFood';
import FoodBox from './FoodBox';

class ShowFood extends Component {

    constructor(){
        super();
        this.handleSearchFood = this.handleSearchFood.bind(this);
    }
   
       state = {
           food: foods,
           foodFiltered: foods
       }

       handleAddFood = (theFood) => {
           const foodCopy = [...this.state.food];
           foodCopy.push(theFood);
           this.setState({
               food:  foodCopy
           })
       }
       
       handleSearchFood = (event) => {
           let searchFood = this.state.food.filter((item) => {
               return (
                   item.name.includes(event.target.value)
               )
           })

           this.setState({
               foodFiltered: searchFood
           })
       }

render (){
    return (
        <div>
         <div className='column'>
             
            <div className='column content'>
                <h2>Today's foods</h2>
            </div>

            <AddFood addFood={this.handleAddFood}></AddFood>
                
            <div className='column content'>
                <input type='text' placeholder='Search Food' onChange={this.handleSearchFood}></input>
            </div>

           
              <div className='column content'>
              {this.state.foodFiltered.map((item, index) => (
                  <FoodBox>
                      key = {index.toString()}
                      image = {item.image}
                      name = {item.name}
                      calories = {item.calories}
                  </FoodBox>
              ))}
              </div>
            </div>
        </div>  
    )
}

}

export default ShowFood; 