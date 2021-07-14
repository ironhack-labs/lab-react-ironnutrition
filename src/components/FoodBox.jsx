import React, { Component } from 'react'

// Iteration1: Create a FoodBox component that takes at least food as a prop and displays a box with all the information about an ingredient.

class FoodBox extends Component {

    state = {
        quantity: 1
    }

    handleQuantity = (event) => {
        console.log(event.target.value)
        this.setState({
            quantity: event.target.value 
        })
    }

    render() {
        const {food, handleAddTotal} = this.props //for the iteration2: here we are destructuring the "this.props", that we defined in App.js. Because of this line, now we can use only food to refer each food that is stored in foods.json
        return (
            <div>
                <div className="box">
                    <article className="media">
                        <div className="media-left">
                        <figure className="image is-64x64">
                            {/* food.image is picking the image url of each food that is stored in foods.json. Image is a prop. */}
                            <img src={`${food.image}`} />
                        </figure>
                        </div>
                        <div className="media-content">
                        <div className="content">
                            <p>
                            {/* food.name is picking the name of each food that is stored in foods.json. Name is a prop. */}
                            <strong>{food.name}</strong> <br />
                            {/* food.calories is picking the calories of each food that is stored in foods.json. Calories is a prop. */}
                            <small>{food.calories}</small>
                            </p>
                        </div>
                        </div>
                        <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                            <input className="input" type="number" name="quantity" onChange={(event) => {this.handleQuantity(event)}}/>
                            </div>
                            <div className="control">
                            <button className="button is-info" onClick={(event) => {handleAddTotal(event, this.state.quantity, food)}}>
                                +
                            </button>
                            </div>
                        </div>
                        </div>
                    </article>
                </div>
             </div>
        )
    }
}

export default FoodBox;