import React, { Component } from 'react'


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
        const {food, handleAddTotal} = this.props 
        return (
                <div>
                    <div className="box">
                        <article className="media">
                            <div className="media-left">
                            <figure className="image is-64x64">
                                
                                <img src={`${food.image}`}  alt="picsFood"/>
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