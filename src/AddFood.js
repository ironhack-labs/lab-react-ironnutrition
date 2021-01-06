import React from 'react';
import 'bulma/css/bulma.css';

class AddFood extends React.Component {

    // I am using here "extends React.COmponent"
    // in this case constructor is a standard property
    // I can ship it here or create my own which will overwrite the standard one

    state = {
        name: "",
        calories: "",
        image: ""
    }

    handleNameInput = (event) => {
        this.setState({
            name: event.currentTarget.value
        })
    }

    handleCaloriesInput = (event) => {
        this.setState({
            calories: event.currentTarget.value
        })
    }

    handleImageInput = (event) => {
        this.setState({
            image: event.currentTarget.value
        })
    }

    submitHandler = () => {
        const newFood = {
            name: this.state.name,
            calories: this.state.calories,
            image: this.state.image,
            quantity: 0
        };
        this.props.addNewFood(newFood);
    }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="fname"></label>
                    <input id="fname" type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleNameInput} ></input>

                    <label htmlFor="fcalories"></label>
                    <input id="fcalories" type="number" name="calories" placeholder="Calories" value={this.state.calories} onChange={this.handleCaloriesInput} ></input>

                    <label htmlFor="fimage"></label>
                    <input id="fimage" type="text" name="image" placeholder="Image URL" value={this.state.image} onChange={this.handleImageInput} ></input>

                    <button onClick={this.submitHandler}>Submit</button>
                </form>
            </div>
        )
    }

}

export default AddFood;