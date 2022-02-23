import React from 'react';
import { useState } from "react";
import foodsArr from "../foods.json"
import 'bulma/css/bulma.css';
import Foods from "./Foods";

export default function Main() {

    const [foods, setfoods] = useState(foodsArr);


    return (
        // <section className="Main">{

            
                foods.map((element, index) => {
                    return (
                        <Foods
                            name={element.name}
                            calories={element.calories}
                            image={element.image}
                            quantity={element.quantity}
                        />
                    )
                })
            



        // }</section>
    )
}