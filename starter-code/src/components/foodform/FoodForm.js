import React, { Component } from 'react';


class FoodBox extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            calories: 0,
            image: "",
            quantity: 0
        }
    }

    handleNameInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleCaloriesInput = (event) => {
        this.setState({
            calories: event.target.value
        })
    }
    handleImageInput = (event) => {
        this.setState({
            image: event.target.value
        })
    }
    handleQuantityInput = (event) => {
        this.setState({
            quantity: event.target.value
        })
    }
    upLoadFood = (event) => {
        this.props.createNewFood(this.state)
    }


    render() {
        return (
            <div id="form">
                <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Combullita" name="name"
                            value={this.state.name} onChange={(e) => this.handleNameInput(e)}></input>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Calories</label>
                    <div class="control">
                        <input class="input" type="number" placeholder="173"
                            value={this.state.calories} onChange={(e) => this.handleCaloriesInput(e)}></input>
                    </div>
                </div>
                <div class="field">
                    <label class="label">Image(url)</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="http/lacombullllita.png"
                            value={this.state.image} onChange={(e) => this.handleImageInput(e)}></input>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Quantity</label>
                    <div class="control">
                        <input class="input" type="number" placeholder="4"
                            value={this.state.quantity} onChange={(e) => this.handleQuantityInput(e)}></input>
                    </div>
                </div>
                <div class="control">
                    <button onClick={(e) => this.upLoadFood(e)} class="button is-primary">Submit</button>
                </div>
            </div>


        );
    }
}

export default FoodBox;