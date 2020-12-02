import React, { Component } from 'react'
import foods from '../../foods.json'
import './Food-Box.css'
import NewFood from '../new-food/New-Food'

export default class FoodBox extends Component {
    constructor() {
        super()

        this.state = {
            foods: foods,
            search: ''
        }
        console.log(foods)
    }

    insertNewFood = newFood => {
        const foodsCopy = [...this.state.foods]
        foodsCopy.push(newFood)
        this.setState({ foods: foodsCopy })
    }

    searchFood = e => {
        e.preventDefault()

        const value = e.target.value

        this.setState({
            search: value
        })

        const searchResult = foods.filter(elm => elm.name == this.state.search)
        console.log(searchResult)
        this.setState({
            foods: searchResult
        })

    }

    addQuantity = e => {
        e.preventDefault()

        console.log(e.target)
    }

    render() {

        return (
            <>

                <NewFood addFood={this.insertNewFood} />
                <input className="form-control" type="text" placeholder="Search" value={this.state.search} onChange={this.searchFood} />

                {this.state.foods.map((elm, idx) => {
                    return (
                        <div className="box" key={idx}>
                            <article className="media">
                                <div className="media-left">
                                    <figure className="image is-64x64">
                                        <img src={elm.image} alt={elm.name} />
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <div className="content">
                                        <p>
                                            <strong>{elm.name}</strong> <br />
                                            <small>{elm.calories} cal</small>
                                            <small>{elm.quantity}</small>
                                        </p>
                                    </div>
                                </div>
                                <div className="media-right">
                                    <div className="field has-addons">
                                        <div className="control">
                                            <input className="input" type="number" />
                                        </div>
                                        <div className="control">
                                            <button className="button is-info" onClick={this.addQuantity}>
                                                +
          </button>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    )
                }
                )}
            </>
        )

    }
}