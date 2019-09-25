import React, { Component } from 'react';


class FoodBox extends Component {

    render() {

        return (
            <div>
                <div
                    className="box">
                    <article className="media">
                        <div className="media-left">
                            <figure className="image is-64x64">
                                <img src={this.props.image} />
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
                                        name="quantity"
                                        className="input"
                                        type="number"
                                        onChange={(e) => this.props.handleChange(e, this.props.name, this.props.quantity)}
                                        value={this.props.quantity}
                                    />
                                </div>
                                <div className="control">
                                    <button
                                        onClick={(e) => this.props.handleClick(e, this.props)}
                                        className="button is-info">
                                        +
                </button>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        );
    }
}

export default FoodBox;