import React, { Component } from 'react'
import { render } from 'react-dom'
import foods from '../foods.json'
import Foodbox from './Foodbox'

class FoodboxList extends Component {


    constructor() {
        super() 
        this.state = {foodsList: [...foods]}
    }


    render() {
        return (
        this.state.foodsList.map(elm => <Foodbox key={elm.idx} name={elm.name} calories={elm.calories} image={elm.image}/> 
        )
    )}
}

export default FoodboxList