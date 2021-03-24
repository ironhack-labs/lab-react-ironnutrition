import React, { Component }  from 'react';
import foods from '../foods.json';
import FoodBox from './FoodBox'


export default class Main extends Component {
    
    state = {
        foods: [...foods]
    }

    foods = this.state.foods

    render() {
        return (
            <div>
                {foods.map(food => (
                  <div className="FoodBox" key={food.name}>
                    <FoodBox {...food} />
                  </div>
                ))}
            </div>
        )
    }

}