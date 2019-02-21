import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import SingleFood from './SingleFood';
import Form from './Form'


class Foodbox extends Component {
    constructor(props) {
        super()
        this.state = {
            data: foods,
            formVisible: false,
            searchTerm: ''
        }
    }

    showForm = () => {
        this.setState({
            data: foods,
            formVisible: true
        })
        console.log('showForm')
    }

    formHandler = () => {
        this.setState({

        })
    }

    addFood = () => {
        this.setState({
            formVisible: false
        })
    }

    render() {
        console.log(this.state.data)

        const foodData = this.state.data.map((f, index) => {
            return (
                <SingleFood key={index} {...f} />
            )
        })

        if (this.state.formVisible == true) {
            return (
                <div>
                    {foodData}
                    <button onClick={() => this.showForm()}>Add Food</button>
                    <Form addFood={() => this.addFood()} />
                </div>
            )
        }

        return (
            <div>
                {foodData}
                <button onClick={() => this.showForm()}>Add Food</button>

            </div>
        );
    }
}

export default Foodbox;
