import { Component } from 'react';
import foods from '../../foods.json';
import FoodBox from '../food-box/FoodBox';

class FoodList extends Component {

    render() {
        return (
            <div>
                {foods.map((food, i) => {
                    return <FoodBox key={i} food={food} />
                })}
            </div>
        );
    }
}

export default FoodList;