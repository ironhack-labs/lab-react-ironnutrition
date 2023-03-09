import React, { Component } from 'react';
import FoodList from '../../components/FoodList/FoodList';
import FoodsJSON from "./../../foods.json";


class Home extends Component {
    state = {
        food: FoodsJSON,
    }
    render() {
        const {food} = this.state;
        return (
            <div>
               <FoodList food={food}/> 
            </div>
        );
    }
}

export default Home;