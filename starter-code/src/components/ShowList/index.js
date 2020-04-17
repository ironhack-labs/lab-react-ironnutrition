import React, { Component } from 'react';
import FoodBox from '../FoodBox';
import "./style.css";

class ShowList extends Component {
    render(){
        const { list ,filter, addFoodList } = this.props;
        console.log(list)
        return (
            <div className="listFoods">
             {list.filter((item) => item.name.includes(filter)).map( 
                    (food, index) =>  { 
                        const props = {
                            key: index,
                            name: food.name,
                            image: food.image,
                            calories: food.calories,
                            quantity: food.quantity,
                            addFoodList: addFoodList
                        }
                        return <FoodBox {...props} /> 
                    }
                 )} 
            </div>
        )
    } 
}


export default ShowList;