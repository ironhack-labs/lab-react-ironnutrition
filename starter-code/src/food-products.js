import React, { Component } from 'react'
import foods from './foods.json'
import { Link } from 'react-router-dom';
import AddFood from './form'

class FoodBox extends Component {
    constructor() {
        super()
        this.state = {allFoods: foods}
    }
    addOneFood = food => {
        const foodCopy = [...this.state.allFoods]
        foodCopy.push(food)

        this.setState({
            allFoods: foodCopy
        })
    }
    render() {
        return (
            <div>
                <p>asdas</p>
            <AddFood addFood={this.addOneFood} />
           
                {this.state.allFoods.map((elm)=>
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
                                <input
                                    className="input"
                                    type="number" 
                                    value="1"
                                />
                            </div>
                        <div className="control">
                            <button className="button is-info"><Link to='/form'>
                                    +</Link>
                            </button>
                        </div>
                        </div>
                </div>
            </article>
        </div>
                )}
        </div>
    
        )
    }
}

export default FoodBox