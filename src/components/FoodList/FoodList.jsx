import React from "react";
import "./FoodList.css"
import foods from "../../foods.json"
import FoodBox from "../FoodBox/FoodBox"
import NewFood from '../NewFood/NewFood'
import SearchBar from "../SearchBar/SearchBar";

class FoodList extends React.Component {
    state = {
        foods: foods,
        search: ""
    }

    onAdd = (food) => {
        this.setState({
            foods: [food, ...this.state.foods]
        })
    }

    onSearch = (search) => {
        console.log("entro2")
        this.setState({
            search: search
        })
    }

    render() {
        return(
            <div className="FoodList">
            <NewFood onAdd={this.onAdd}/>
            <SearchBar onSearch={this.onSearch}/>
            {this.state.foods.filter((food)=> food.name.toLowerCase().includes(this.state.search.toLowerCase())).map((food)=> (

                <FoodBox {...food}/>
            ))}
            </div>
        )
    }
}

export default FoodList;