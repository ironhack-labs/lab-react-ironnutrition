import React, { Component } from "react";

export default class FoodBox extends Component {

    render() {
        const { item } = this.props
        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={item.image} alt="" />
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{item.name}</strong> <br />
                                <small>{item.calories} cal</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input id={"form-quantity-input" + item.name} className="input" type="number" defaultValue="1" />
                            </div>
                            <div className="control">
                                <button onClick={() => { this.props.onAddTodaysFood(item.name, document.getElementById("form-quantity-input" + item.name)) }} className="button is-info">
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