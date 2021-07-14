import React, { Component } from 'react'

class FoodBox extends Component {

    state = {
      amount: 1
    }

    handleChangeAmount = (event) => {
      this.setState({
        amount: event.target.value
      })
    }

    render() {
        const {food} = this.props
        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={food.image} />
                    </figure>
                    </div>
                    <div className="media-content">
                    <div className="content">
                        <p>
                        <strong>{food.name}</strong> <br />
                        <small>{food.calories} cal</small>
                        </p>
                    </div>
                    </div>
                    <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                        <input className="input" type="number" onChange={this.handleChangeAmount} value={this.state.amount} />
                        </div>
                        <div className="control">
                        <button onClick={() => this.props.onAddFoods({food: food, amount: this.state.amount})} className="button is-info">
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