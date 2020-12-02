import React, { Component } from 'react'
import './Foodbox.css'
import foods from './../foods.json';
import Form from './../Form/Form'

class FoodBox extends Component {
    constructor() {
        super()
        this.state = {
            foodLists: foods,
            newListFood: []
        }
    }

    insertNewFood = newFood => {
        const foodsCopy = [...this.state.foodLists]
        foodsCopy.push(newFood)
        this.setState({ foodLists: foodsCopy })
    }

    render() {

        return (
            <section className='hero'>
                <h1>Crea tu propia comida</h1>
                <Form addFood={this.insertNewFood} />
                <hr />
                {this.state.foodLists.map(elm => {
                    return (
                        <div className="box">
                            <article className="media">
                                <div className="media-left">
                                    <figure className="image is-64x64">
                                        <img src={elm.image} />
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <div className="content">
                                        <p>
                                            <strong>{elm.name}</strong> <br />
                                            <small>{elm.calories}</small>
                                        </p>
                                    </div>
                                </div>
                                <div className="media-right">
                                    <div className="field has-addons">
                                        <div className="control">
                                            <input className="input" type="number" name="quantity" onChange={this.handleInputChange} />
                                        </div>
                                        <div className="control">
                                            <button type='submit' className="button is-info">
                                                +
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    )
                })}
            </section>
        )
    }

}

export default FoodBox