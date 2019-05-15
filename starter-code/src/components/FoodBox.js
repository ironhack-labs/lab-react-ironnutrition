import React, { Component } from 'react';

class FoodBox extends Component {
    state = {
        name: this.props.name,
        calories: 0,
        quantity: 0
    }

    updateQuantity = (e) => {
        this.setState({
            quantity: e.target.value,
            calories: e.target.value * this.props.calories
        })
    }

    updateItem = () => {
        this.props.add(this.state)
    }



    render() {
        return (
            <div className="box">
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
                                <small>{this.props.calories}</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input className="input" type="number" onChange={this.updateQuantity} />
                            </div>
                            <div className="control">
                                <button className="button is-info" onClick={this.updateItem} >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        );
    }
}

export default FoodBox;