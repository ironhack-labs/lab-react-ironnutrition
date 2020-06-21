import React, { Component } from 'react';
import FoodBox from "./FoodBox";
class FoodList extends Component {
    constructor(props){
        super(props)
        this.addToList = this.addToList.bind(this);
    }
    addToList = (name , calories, number) =>{
        this.props.addTodaysFood(name, calories, number)
      }
    render() {
        return ( 
            <div>
                {
                        this.props.foodList.map((oneItem, index) => {
                        return <FoodBox
                            key = {index}
                            index = {index.toString()}
                            name = {oneItem.name}
                            img = {oneItem.image}
                            calories = {oneItem.calories}
                            addToList = {this.addToList}/>
                        })
                } 
                
            </div>
        );
    }
}

export default FoodList;
