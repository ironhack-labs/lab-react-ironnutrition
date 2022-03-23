import React from "react";
import FoodItem from "./FoodItem";


const FoodBox = ({food}) => {
    return (
        <div className="box" style={{width:"600px"}}>
            <FoodItem {...food}></FoodItem>
        </div>      
    );
};

export default FoodBox;
