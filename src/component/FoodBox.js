import React, { Component } from 'react'
import AddFood from './AddFood'
import {Button} from '@material-ui/core'

export default class FoodBox extends Component {
    state = {
        showForm: false
    }

    handleClick = () => {
        this.setState({
            showForm: true
        })
    }

    handelAddFood = (event) => {
        event.preventDefault()

        this.setState({
            showForm: false,
        })

        let newFood = {
            name: event.target.name.value,
            calories: event.target.calories.value,
            image: "https://i.imgur.com/LoG39wK.jpg",
            quantity: event.target.quantity.value,
        }
        this.props.onAddNewFood(newFood)
    }

    render() {
        const {foods} = this.props
        const {showForm} = this.state
        return (
            <div className="box">
                {/* {
                    showForm ? <AddFood onAddFood={this.handelAddFood}/> : <Button onClick={this.handleClick}  cvariant="contained" color="primary">Add Food</Button>
                } */}

                {
                foods.map((food, i) => {
                    return <form onSubmit={(event) => this.props.onFoodList(event, food)} key={i} className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={food.image} alt='{foods.name}' />
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{food.name}</strong> <br />
                                <small>{food.calories}</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input className="input" type="number"  />
                            </div>
                            <div className="control">
                                <button  className="button is-info">
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
                })
                }
            </div>
        )
    }
}
