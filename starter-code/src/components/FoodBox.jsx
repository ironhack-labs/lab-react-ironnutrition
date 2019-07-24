import React, { Component } from 'react';
import FoodCard from './FoodCard'

class FoodBox extends Component {
    constructor(props) {
        super(props)

        this.state = {
            foods: this.props.foods,
            total: 0,
            calories: 0,
            // todaysfood: [],
        }
        this.dailyCalories = this.dailyCalories.bind(this);
    }

    returnCalories() {
        let result = [];
        this.state.foods.map((total, idx) => {
            if (total.quantity > 0) {
            result.push(total.calories * total.quantity)
            }
        })
        let totalCalories = result.reduce((total, idx) => {
            return total + idx
        }, 0)
        this.setState({
            calories: totalCalories
        })
    }

    dailyCalories(updatedFood) {
        let newArr = this.state.foods
        newArr.forEach((food,idx) => {
            if(updatedFood.name === food.name) {
                food.quantity += updatedFood.quantity
            }
        })
        this.setState({
            foods: newArr
        })
        this.returnCalories()
    }


    // addHandler(el) {
    //     let todaysFoodArray = this.state.todaysfood;
    //     todaysFoodArray.push(el);

    //     this.setState({
    //         todaysfood: todaysFoodArray,
    //     })
    // }

    render () {
        return(
        
            <div>
            { this.props.foods.map((el, idx) => {
            return <FoodCard key={idx} {...el} dailyCalories={this.dailyCalories}/>
            })
            }
            <h3>Today's foods</h3>
                <ul>
                {
                    this.state.foods.map((el, idx) => {
                        if(el.quantity > 0) {
                            return <li key={idx}>{el.quantity} {el.name} = {el.calories * el.quantity}</li>
                        }
                        <button onClick={this.deleteHandler.bind(this, idx)}>Delete food</button>
                    })
                }
                </ul>
                <p>Total: {this.state.calories} cal</p>
    
            </div>
        )
    }
}

export default FoodBox;