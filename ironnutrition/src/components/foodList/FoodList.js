import React, { Component } from 'react'
import foods from './../../foods.json';
import 'bulma/css/bulma.css';
import FoodBox from './FoodBox'
import './FoodList.css'
import FoodForm from './FoodForm'


class FoodList extends Component {
    constructor() {
        super()
        this.state = {
            foods,
            formAvailable: false

        }
    }

    insertNewFood = newFood => {
        const foodsCopy = [...this.state.foods]
        foodsCopy.push(newFood)
        this.setState({ foods: foodsCopy })
    }


    





    render() {
        return (
        <section>
                <h1 className='title'>Ironnutrition</h1>
                <hr />
                {this.state.formAvailable ? <FoodForm /> : <button className='btn-new-food' onClick={() => this.setState({formAvailable: true})}>Add new food</button> }
                {this.state.foods.map((elm, idx) => <FoodBox key={idx} name={elm.name} calories={elm.calories} image={elm.image} quantity={elm.quantity} />)}
        </section>

        )
    }

}



export default FoodList