import React, { Component } from 'react'

class FoodRow extends Component {
    render() {
        const food = this.props.food;
        return (
            <section style={{display: "flex", margin: "15px"}}>
                <div>
                <img style={{width: "100px"}} src={food.image} alt=""/>
                </div>
                <div>
                <p>{food.name}</p> <p>{food.calories} kcal</p> 
                </div>
            </section>
        )
    }
}

export default FoodRow
