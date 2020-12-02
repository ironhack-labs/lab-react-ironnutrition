import React, { Component } from 'react';

import foods from './../foods.json';

import NutriCard from './Nutri-card';

import NutriForm from './Nutri-form';

import './App.css';


class NutriList extends Component {

    constructor() {

        super()
        this.state = {
            foods: foods,
            text: ''
        }
    }

    insertNewFood = newFood => {

        const foodCopy = [...this.state.foods]
        foodCopy.push(newFood)
        this.setState({ foods: foodCopy })

    }

    filter(event) {

        let text = event.target.value

        const data = this.state.foods

        const newData = data.filter(function (item) {
            const itemData = item.name.toUpperCase()
            const textData = text.toUpperCase()
            return itemData.indexOf(textData) > -1
        })

        this.setState({
            foods: newData,
            text: text,
        })
    }

    render() {

        return (

            <>
                <h2 className="title">Crear un nuevo alimento</h2>

                <NutriForm addFood={this.insertNewFood} />

                <h2 className="title">Buscar alimentos</h2>

                <input className="form-control" value={this.state.text} onChange={(text) => this.filter(text)} />


                {this.state.foods.map((elm, idx) => <NutriCard key={idx} name={elm.name} calories={elm.calories} image={elm.image} />)}

            </>

        )
    }
}

export default NutriList
