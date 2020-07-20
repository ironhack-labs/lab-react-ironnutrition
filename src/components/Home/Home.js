import React from 'react'
import FoodBox from "../FoodBox/FoodBox"
import foods from "../../foods.json"
import { Link } from 'react-router-dom'
import "./Home.css"

function Home() {

 
    return (
        <div>
            <h1 className="title">Ironnutrition</h1>
            <FoodBox food={foods}/>
            <Link className="button is-info" to='/form'>Add new Food</Link>
           
        </div>
    )
}

export default Home
