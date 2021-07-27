import React from 'react';
import foodsData from '../../data/foods.json'
import Foodbox from "../food-box/FoodBox";
import uuid from 'uuid'


class FoodList extends React.Component {

    state= {
        foods: [],
    }

    componentDidMount () {
        this.setState({ 
/*             foods: foodsData.map((food) => {
                food: {
                    food.name;
                    food.calories;
                    food.image;
                    food.quantity;
                    food['id']= uuid.v4().toString()
                }
                return food;
            })  */
            foods: foodsData.map((food) => 
            {return food.name,
            food.calories,
            food.image,
            food.quantity,
            food['id']= uuid.v4().toString()}) 
            
            /* tweetsDB.push({
                id: uuid.v4().toString(),
                user: user,
                message: message,
                createdAt: new Date()
              }) */
        })
    }

    handleAddFood(id) {

        console.log(id)
    }

    render() {
        const { foods } = this.state;

        return(
            <div className="row mb-2">
                <div className="col-9">
                {foods.map( food => 
                    <Foodbox {...food } onAddFood={(id) => this.handleAddFood(id)}/>
                )}

                </div>
            </div>
        );
    }
}

export default FoodList;