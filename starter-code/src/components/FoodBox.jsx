import React, { Component } from 'react'

export default class FoodBox extends Component {

    state = {
        name: this.props.name,
        calories: this.props.calories,
        image: this.props.image,
        quantity: this.props.quantity
    }

    handleQuantity = (evt) => {
        this.setState({quantity: evt.target.value});
    }

    handleAdd = () => {
        this.props.clbk(this.state)
    }

    render() {
        const {name, calories, image} = this.props;
        return (
                <div className="box box-container">
                    <article className="media">
                        <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={`${image}`} alt="food"/>
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
                            <input
                                className="input"
                                type="number"
                                placeholder="0"
                                onChange={this.handleQuantity} 
                            />
                            </div>
                            <div className="control">
                            <button className="button is-info" onClick={this.handleAdd}>
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
