import React,{ Component } from "react"
import foodsArr from '../../foods.json';

import "./FoodBox.css"

class FoodBox extends Component {
    constructor(props) {
        super(props)

        this.state = {
            quantity: 0,
        }
    }

    render() {
        const { food } = this.props
        let selectedFood = foodsArr.filter( (foodItem) => {
            return foodItem.name === food
        })
        console.log(selectedFood)
        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={selectedFood[0].image} />
                    </figure>
                    </div>
                    <div className="media-content">
                    <div className="content">
                        <p>
                        
                        <strong>{selectedFood[0].name}</strong> <br />
                        <small>{selectedFood[0].calories}</small>
                        </p>
                    </div>
                    </div>
                    <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                        <input className="input" type="number" value={this.state.quantity} />
                        </div>
                        <div className="control">
                        <button className="button is-info">
                            +
                        </button>
                        </div>
                    </div>
                    </div>
                </article>
            </div>
        )
    }
    
}

export default FoodBox;