import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddFoodForm from '../../components/AddFoodForm/AddFoodForm';
import FoodBox from '../../components/FoodBox/FoodBox';
import foodsJson from '../../foods.json';

class HomeView extends Component {
    state = {
        foodList: [...foodsJson]
    }

    render() { 
        return ( 
            <div>
                <AddFoodForm/>
                {
                    this.state.foodList.map(food => (
                        <FoodBox
                            key={ uuidv4() }
                            name={ food.name }
                            calories={ food.calories }
                            servings={ food.servings }
                            image={ food.image }
                        />
                    ))
                }
            </div>
        );
    }
}
 
export default HomeView;