import React, { Component } from 'react'

class FoodBox extends Component {
    state = {
        ...this.props.food,
        quantity: 1
    }

    handleChange = (event) => {
        if (event.target.value > 0) {
            this.setState({
                quantity: Number(event.target.value)
            })
        }
    }

    render() {
        const { name, image, calories, quantity } = this.state
        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={image} alt={name} />
                    </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                            <strong>{name}</strong> <br />
                            <small>{calories} cal</small>
                            </p>
                        </div>
                        </div>
                        <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                            <input className="input" type="number" value={quantity} onChange={this.handleChange}/>
                            </div>
                            <div className="control">
                            <button onClick={() => this.props.addToTodaysFood(this.state)} className="button is-info">
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
export default FoodBox