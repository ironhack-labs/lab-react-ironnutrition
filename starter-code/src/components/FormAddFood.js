import React, { Component } from 'react';

class FormAddFood extends Component {
    state = {
        formVisible: false,
        name: '',
        calories: 0,
        image: '',
    }

    setVisibleForm = () => {
        this.setState({
            formVisible: true
        });
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleClick = () => {
        const { click } = this.props;
        const newFood = {
            name: this.state.name,
            calories: this.state.calories,
            image: this.state.image,
            quantity: 0
        }

        click(newFood);

        this.setState({
            formVisible: false,
            name: '',
            calories: '',
            image: ''
        });
    }

    render() {
        const { formVisible, name, calories, image } = this.state;

        return (
            <div>
                <button onClick={this.setVisibleForm}>More food!</button>
                {
                    formVisible &&
                    <div>
                        <h1>Insert new food:</h1>
                        <label htmlFor="name">Name: </label>
                        <input id="name" type="text" name="name" value={name} onChange={this.handleInput}></input>
                        <label htmlFor='calories'>Calories: </label>
                        <input id='calories' type='number' name='calories' value={calories} onChange={this.handleInput}></input>
                        <label htmlFor='image'>URL image: </label>
                        <input id='image' type='text' name='image' value={image} onChange={this.handleInput}></input>
                        <button onClick={this.handleClick}>Save food</button>
                    </div>
                }
            </div>
        );
    }
}

export default FormAddFood;