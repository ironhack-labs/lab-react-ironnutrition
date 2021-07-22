import React, { Component }  from 'react';
import foods from '../foods.json'
import FoodBox from "./FoodBox";
import AddFood from './AddFood';
import './Main.css';

class Main extends Component {
    state = {
        foodList: foods,
    }

    handleAddFood = (food) => {
        const newFoods = [...this.state.foodList, food];
        this.setState({
          foodList: newFoods,
        });
    };


    render() {
        return (
            <>
            <div className='form-div'>
                <AddFood addFood={this.handleAddFood} />
            </div>
            <div className='food-cards'>
                {this.state.foodList.map((item) => (
                      <FoodBox food={item}/>
                    )
                )}
            </div>
          </>
        )
    }
}

export default Main;