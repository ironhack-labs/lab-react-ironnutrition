import React from "react";
import { Component } from "react";
import dataFood from '../../data/foods.json'
import FoodBox from "../box-food/FoodBox";
import FormFood from "../form-food/FormFood";
import Search from "../search-bar/Search";

class ListFood extends Component {

    state = {
        foodListed: [],
        formVisible: false,
        search: '',
        text: ''
    }

    handleSearch(text) {
        this.setState({ search: text })
    }

    componentDidMount() {
        this.setState({ foodListed: dataFood })
    }


    handleCreateFood(food) {
        this.setState(({foodListed}) => ({
            foodListed: [food,...foodListed]
        }))
    }

    changeVisibility() {
        this.setState((state) => ({
            formVisible: !state.formVisible
        }))
    }

    render() {
        const { foodListed  } = this.state
        const foodMeal = foodListed.filter((food) => {
            return food.name.toLowerCase().includes(this.state.search.toLowerCase())
        })
        return (
            <div className="container">

                <h1 className="d-flex justify-content-center mt-5">Iron Foodie</h1>

                <div>
                    <Search  onSearch={(text) => this.handleSearch(text)}/>
                </div>

                <div style={{display: this.state.formVisible ? "block" : "none"}}>
                    <FormFood onCreateFood={(food) => this.handleCreateFood(food)} changeVisibility={()=> this.changeVisibility()}/>
                </div>

                <div className="m-5">
                    <button type="button" className="btn btn-outline-primary" onClick={()=> this.changeVisibility()}>Add new food</button>

                    {foodMeal.map(meal =>
                        <FoodBox  {...meal} key={meal.name} />
                    )}
                </div>

            </div>
        )
    }
}

export default ListFood