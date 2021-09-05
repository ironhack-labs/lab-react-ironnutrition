import React from "react";
import "./FoodList.css"
import foods from "../../foods.json"
import FoodBox from "../FoodBox/FoodBox"
import NewFood from '../NewFood/NewFood'

class FoodList extends React.Component {
    state = {
        foods: foods
    }

    onAdd = (food) => {
        this.setState({
            foods: [food, ...this.state.foods]
        })
    }
    render() {
        return(
            <div className="FoodList">
            <NewFood onAdd={this.onAdd}/>
            {this.state.foods.map((food)=> (

                <FoodBox {...food}/>
            ))}
            </div>
        )
    }
}

export default FoodList;