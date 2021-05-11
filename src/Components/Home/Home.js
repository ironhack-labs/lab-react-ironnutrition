import React from 'react';
import 'bulma/css/bulma.css';
import FoodList from '../FoodList/FoodList';

const Home = () => {

    return (

    <div>
        <h1>IronNutrition</h1>
        <div>
            <FoodList />
        </div>
    </div>
    )
}

export default Home;