// este es el padre de las food list y food Box

import { Component } from "react";
import foodsJSON from "../../data/foods.json";
import FoodBox from "../../components/FoodBox/FoodBox";  // llamo el Foodbox porque el index lo he renombrado como el componente
import AddFoodForm from "../../components/FoodBox/FoodBox";
import { v4 as uuidv4 } from 'uuid'; // unique identifier

class Home extends Component {
    state = {
        foodList: [...foodsJSON]
    }

    render() {
        return (
            <div>
                <AddFoodForm />
                {
                    this.state.foodList.map(food => (
                        <FoodBox
                            key={uuidv4()}
                            name={food.name}
                            calories={food.calories}
                            servings={food.servings}
                            image={food.image}
                        />
                    ))
                }
            </div>
        );
    }
}

export default Home;