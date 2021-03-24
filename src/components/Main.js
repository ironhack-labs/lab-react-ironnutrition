import React, { Component }  from 'react';
import foods from '../foods.json';
import FoodBox from './FoodBox'


export default class Main extends Component {
    
    state = {
        foods: [...foods]
    }

    render() {
        return (
            <div className="Main">
                <FoodBox foods={foods}/>
            </div>
        )
    }

}