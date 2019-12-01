import React, { Component } from 'react'

export default class FoodBox extends Component {
    state = {
        quantity: this.props.quantity,
    }

    // 2) fonction addToday fait elle-meme appel à fonction onAdd du parent(car props) avec ces paramètres
    addToday = () => {
        this.props.onAdd(this.props.name, this.state.quantity, this.props.calories);
    }

    handleChange = (event) => {
        this.setState({ quantity: event.target.value });
    }

    render() {
        return (

            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={this.props.image} alt="food" />
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{this.props.name}</strong> <br />
                                <small>{this.props.calories} cal</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input
                                    className="input"
                                    type="number"
                                    value={this.state.quantity}
                                    onChange={this.handleChange}
                                // metre defaultValue au lieu de value sinon la value reste fixée par React..
                                />
                            </div>
                            <div className="control">
                                {/* 1) click sur bouton  et appelle fonction addToday plus haut*/}
                                <button className="button is-info" onClick={(e) => this.addToday()}>
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
