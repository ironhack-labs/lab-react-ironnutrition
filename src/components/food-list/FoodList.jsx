
import React from 'react'
import FoodBox from "../food-box/FoodBox"
import foodsData from "../../foods.json"
import Button from './../buttons/Button';
import AddProduct from '../add-product/AddProduct';
import FoodsToBuy from './../foods-to-buy/FoodsToBuy';



class FoodList extends React.Component {

    state = {
        foods: foodsData,
        showForm: false,
        search: '',
        foodsToBuy: []

    }


    addFood = (food) => {
        this.setState((prev) => {
            return {
                foods: [food, ...prev.foods],
                showForm: false
            }
        })

    }

    search = (event) => {
        this.setState({ search: event.target.value })
    }


    foodToBuy = (foodToBuy) => {
        this.setState((prev) => ({ foodsToBuy: [foodToBuy, ...prev.foodsToBuy] }))
    }


    render() {

        return (

            <div className="container" >
                <div>
                    {this.state.showForm && <AddProduct addFood={this.addFood} />}

                    <Button label="Add Product" onClick={() => { this.setState(prev => ({ showForm: !prev.showForm })) }} >
                        Form
                            </Button>

                </div>
                <div>
                    <input
                        type="text"
                        className="form-control mb-4"
                        name="searchText"
                        autoComplete="off"
                        onChange={this.search}
                        placeholder="Search"
                    />
                </div>


                <div className="columns" >
                    <div className="column " >

                        {this.state.foods
                            .filter(e => e.name.toLowerCase().includes(this.state.search.toLowerCase()))
                            .map((food, id) => (
                                <div key={id}>
                                    <FoodBox
                                        foodToBuy={this.foodToBuy}
                                        key={id}
                                        food={food}>
                                    </FoodBox>
                                </div>
                            ))}
                    </div>
                    <div className="column">

                        <FoodsToBuy foodsToBuy={this.state.foodsToBuy} />

                    </div>

                </div>

            </div>

        )
    }
}

export default FoodList