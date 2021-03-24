import React, { Component } from 'react'
import 'bulma/css/bulma.css';
import foods from '../foods.json';
import FoodBox from '../components/FoodBox'

class Foods extends Component {
    state = {
        foods: [...foods]
    }

    render() {
        return (
            <div className="FoodBox">
                {foods.map(food => (
                    <div className="row" >
                        <FoodBox {...food} />
                    </div>
                ))}
            </div>
        );
    }
}

export default Foods;