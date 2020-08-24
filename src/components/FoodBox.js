import React, { Component } from 'react'


class FoodBox extends Component {

    state = {
        name: this.props.name,
        calories: this.props.calories,
        quantity: this.props.quantity
    }

    handleQuantity = (event) => {
        console.log(event.currentTarget.value)
       let newValue = event.currentTarget.value
       this.setState ({
        quantity: newValue 
       })
    }

    render() {

        return (
            <div className="propsthefood">
                <div className='box'>
                    <article className='media'>
                        <div className='media-left'>
                            <figure className='image is-64x64'>
                                <img src={this.props.theFood.image} alt={this.props.theFood.name} />
                            </figure>
                        </div>
                        <div className='media-content'>
                            <div className='content'>
                                <p>
                                    <strong>{this.props.theFood.name}</strong> <br />
                                    <small>{this.props.theFood.calories} cal</small>
                                </p>
                            </div>
                        </div>
                        <div className='media-right'>
                            <div className='field has-addons'>
                                <div className='control'>
                                    <input className='input' type='number' onChange={this.handleQuantity} name={this.props.theFood.name} value={this.state.quantity} />
                                </div>
                                <div className='control'>
                                    <button className='button is-info' name={this.props.theFood.name}>
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

export default FoodBox