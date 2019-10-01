import React, { Component } from 'react';

class FoodBox extends Component {
    state = {
        quantity: 0
    }
    handleQuantityInput = (event) => {
        this.setState({
            quantity: Number(event.target.value)
        })
    }

    render() {
        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img alt={`dinner plate of ${this.props.name}`} src={this.props.image} />
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{this.props.name}</strong> <br />
                                <small>{`${this.props.calories} cal`}</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input className="input" type="number" value={this.state.quantity} onChange={(e) => this.handleQuantityInput(e)} />
                            </div>
                            <div className="control">
                                <button onClick={() => this.props.addToCart(this)} className="button is-info">+</button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        );
    }
}

export default FoodBox;
