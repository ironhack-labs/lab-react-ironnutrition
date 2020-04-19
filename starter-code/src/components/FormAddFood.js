import React, { Component } from 'react';
import './FormAddFood.css';

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
                <button className='button is-info FormAddFood-more-food' onClick={this.setVisibleForm}>More food!</button>
                {
                    formVisible &&
                    <div>
                        <h2 className='FormAddFood-h2'>Insert new food:</h2>
                        <label htmlFor="name">Name: </label>
                        <input className='FormAddFood-input' id="name" type="text" name="name" value={name} onChange={this.handleInput}></input>
                        <label htmlFor='calories'>Calories: </label>
                        <input className='FormAddFood-input' id='calories' type='number' name='calories' value={calories} onChange={this.handleInput}></input>
                        <label htmlFor='image'>URL image: </label>
                        <input className='FormAddFood-input' id='image' type='text' name='image' value={image} onChange={this.handleInput}></input>
                        <button className='FormAddFood-save-food button is-info' onClick={this.handleClick}>Save food</button>
                    </div>
                }
            </div>
        );
    }
}

export default FormAddFood;