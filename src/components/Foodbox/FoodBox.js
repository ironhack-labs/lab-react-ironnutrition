import React, { Component } from 'react'
import 'bulma/css/bulma.css';

class FoodBox extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        const {name, image, quantity, calories} = this.props
        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={image} alt={name}/>
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
                                <input className="input" type="number" value={quantity} />
                            </div>
                            <div className="control">
                                <button className="button is-info">
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