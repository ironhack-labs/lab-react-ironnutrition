import React from 'react';
import foods from './foods.json';

function FoodList(props) {
    return (
        <div>
            <h1>Food List</h1>
            <p className="food-name">Pizza{props.name}</p>
            <img src={'https://i.imgur.com/eTmWoAN.png'}/>{props.image}
            <p className="food-name">Salad{props.name}</p>
            <img src={'https://i.imgur.com/DupGBz5.jpg'}/>{props.image}
            <p className="food-name">Sweet Potato{props.name}</p>
            <img src={'https://i.imgur.com/hGraGyR.jpg'}/>{props.image}
            <p className="food-name">Gnocchi{props.name}</p>
            <img src={'https://i.imgur.com/93ekwW0.jpg'}/>{props.image}
            <p className="food-name"> Pot Roast{props.name}</p>
            <img src={'https://i.imgur.com/WCzJDWz.jpg'}/>{props.image}
            <p className="food-name">Lasagna{props.name}</p>
            <img src={'https://i.imgur.com/ClxOafl.jpg'}/>{props.image}
        </div>
    )
}

export default FoodList;