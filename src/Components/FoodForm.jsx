import React, { Component } from 'react';

export class FoodForm extends Component {

    state = {
        name: "",
        calories: "",
        image: "",
        // quantity: "",
        isDisplayed: false,
    };


    // handleNameChange = (event) => {
    //     const value = event.target.value;
    //     this.setState({ name: value });
    // };
    // handleCaloriesChange = (event) => {
    //     const value = event.target.value;
    //     this.setState({ calories: value });
    // };
    // handleImageChange = (event) => {
    //     const value = event.target.value;
    //     this.setState({ image: value });
    // };
    // handleQuantityChange = (event) => {
    //     const value = event.target.value;
    //     this.setState({ quantity: value });
    // };

    toggleForm = () => {
        this.setState({
            isDisplayed: !this.state.isDisplayed
        });
    };


    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    };

    handleSubmit = (event) => {
        // ALWAYS use this line so the page doesnt refresh!!! event prevent default
        event.preventDefault();

        this.props.addFood({
            name: this.state.name,
            calories: this.state.calories,
            image: this.state.image,
            // quantity: this.state.quantity,
        });
        this.setState({
            name: '',
            calories: '',
            image: '',
        });



    };


    render() {
        return (
            <div>

                <button onClick={this.toggleForm}>Create new nomnomfood</button>
                {(this.state.isDisplayed) && (
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange} />

                        <label htmlFor="">Calories</label>
                        <input
                            type="number"
                            name="calories" min="0"
                            value={this.state.calories}
                            onChange={this.handleChange} />

                        <label htmlFor="image" >Image</label>
                        <input
                            type="file"
                            name="image"
                            value={this.state.image}
                            onChange={this.handleChange} />

                        <label htmlFor="quantity" min="0">Quantity</label>
                        <input
                            type="number"
                            name="quantity"
                            value={this.state.quantity}
                            onChange={this.handleChange} />

                        <button >Submit</button>
                    </form>
                )}

            </div>
        )
    }
}

export default FoodForm;
