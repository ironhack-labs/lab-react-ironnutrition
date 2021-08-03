import React, {useState} from 'react';
import { FoodBox } from '.';
import Foods from '../foods.json';

function FoodList (){
    
        return(
            <div>
            {Foods.map((list, index)=>{
                return<div>
                    <FoodBox
        key={index}
        name={list.name}
        calories={list.calories}
        image={list.image}
        quantity={list.quantity}
    />
                     
                    
                    
                </div>
            })}
                  </div>
        )
        
}
export default FoodList;