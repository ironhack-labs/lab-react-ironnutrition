import React, { Component } from 'react'

export default class AddFoodForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            food: {
                name: "",
                calories: 0,
                image: "",
                quantity: 0
            },
            formIsVisible: false
        }
    }

    handleChange = async (event) => {
        const {name, value} = event.target;
        const foodStateCopy = {...this.state.food}

        foodStateCopy[name] = value;

        await this.setState(() => ({
            food: foodStateCopy
        }));
    }

    onButtonClick = (event) => {
        this.setState((previousState) => ({
            formIsVisible: !previousState.formIsVisible
        }));

        const foodStateCopy = {...this.state.food};
        foodStateCopy.calories = Number(foodStateCopy.calories);

        if (event.target.innerText === "Submit") {
            this.props.onSubmit(foodStateCopy);
        }
    }

    render() {
        const styleDiv = {
            margin: "0 1rem"
        }

        const foodForm = <>
                            <label style={styleDiv}>
                                Name: 
                                <input 
                                    onChange={this.handleChange} 
                                    value={this.state.food.name}
                                    type="text"
                                    name="name"
                                />
                            </label>
                            <label style={styleDiv}>
                                Calories: 
                                <input 
                                    onChange={this.handleChange} 
                                    value={this.state.food.calories}
                                    type="number"
                                    name="calories"
                                />
                            </label>
                            <label style={styleDiv}>
                                Image: 
                                <input 
                                    onChange={this.handleChange} 
                                    value={this.state.food.image}
                                    type="text"
                                    name="image"
                                />
                            </label>
                            <button onClick={this.onButtonClick}>Submit</button>
                        </>


        const addFoodBtn = <button onClick={this.onButtonClick}>Add a new Food</button>;

        return (
            <div>
                {
                    this.state.formIsVisible ? foodForm : addFoodBtn
                }
            </div>
        )
    }
}
