// este es el padre de las food list y food Box

import React, { Component } from 'react';
import FoodList from '../../components/FoodList/FoodList';
import FoodsJSON from "../../data/foods.json";


class Home extends Component {
    state = {
        food: FoodsJSON,
        name: "",
        image: "",
        calories: "",
        servings: "",
        search: "",
    };

    onSubmitFood = (event) => {
        event.preventDefault();

        const { food, name, image, calories, servings } = this.state;

        const newFood = { name, image, calories, servings };

        this.setState({ food: [newFood, ...food] });
    };


    onChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    getFilterFood = () => {
        const { food, search } = this.state

        if (search) {
            return food.filter(food => food.name.toLowerCase().includes(search.toLowerCase()))
        } else {
            return food
        }
    }
    onDeleteFood = (FoodIdToDelete) => {
        const { food } = this.state
        this.setState({ food: food.filter(food => food.name !== FoodIdToDelete) })
    }
    render() {
        const { name, image, calories, servings, search } = this.state;
        return (
            <div className="Home">
                <h3>Add Food </h3>

                <form onSubmit={this.onSubmitFood}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input
                            value={name}
                            onChange={this.onChange}
                            name="name"
                            required
                            className="form-control"
                            id="name"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">
                            Image
                        </label>
                        <input
                            required
                            value={image}
                            onChange={this.onChange}
                            name="image"
                            className="form-control"
                            id="image"
                            placeholder="Insert your image here"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="calories" className="form-label">
                            Calories
                        </label>
                        <input
                            required
                            type="number"
                            value={calories}
                            onChange={this.onChange}
                            name="calories"
                            className="form-control"
                            id="calories"
                            placeholder="1"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="servings" className="form-label">
                            Servings
                        </label>
                        <input
                            type="number"
                            required
                            value={servings}
                            onChange={this.onChange}
                            name="servings"
                            className="form-control"
                            id="servings"
                            placeholder="1"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>

                <hr></hr>

                <input
                    name="search"
                    onChange={this.onChange}
                    value={search}
                    className="form-control mb-4" type="search"
                    placeholder="Search" aria-label="Search"
                />


                <FoodList food={this.getFilterFood()} onDeletedFood={this.onDeleteFood} />
            </div>
        );
    }
}



export default Home;