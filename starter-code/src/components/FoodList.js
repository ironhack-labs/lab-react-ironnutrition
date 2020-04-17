import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import FoodBox from './FoodBox';

class FoodList extends Component{
    render() {
        const { platos, addFoodToTodaysFoods } = this.props;

        return (
            <div className="FoodList">
                {platos.map((item, index) => {
                    return <FoodBox key={index} comida={item} addFoodToTodaysFoods={addFoodToTodaysFoods}/>
                })}
            </div>
        )
    }
}

export default FoodList