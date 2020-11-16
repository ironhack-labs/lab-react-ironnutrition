import foods from './foods.json';
import React from 'react';

function FoodImg(){
    const newFo = [...foods];
    
    console.log(newFo.name)
    return (
        newFo.map((elem, idx)=>{
            <img src={idx.image}></img>
        }
        )
    )
}

export default FoodImg;
