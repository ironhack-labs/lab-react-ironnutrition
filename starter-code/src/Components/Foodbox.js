import React, { Component } from 'react'

export default class Foodbox extends Component {
    state = {
        quantity: 0
    }

    setQuantity = (e) => {
        this.setState({quantity:e.target.value})
    }
    addTodayFood = (e) => {
        let {quantity} = this.state;
        let {name,calories} = this.props;
        if(quantity <=0) return;
        this.props.foodReady({name,calories,quantity:+quantity});
    }

    render() {
        let { image, name, calories } = this.props;
        let { quantity } = this.state;
        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={image} />
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{name}</strong> <br />
                                <small>{calories}</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input
                                    className="input"
                                    type="number"
                                    value={quantity}
                                    onChange={e => this.setQuantity(e)}
                                />
                            </div>
                            <div className="control">
                                <button className="button is-info"
                                onClick={e=> this.addTodayFood(e)}
                                >
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
