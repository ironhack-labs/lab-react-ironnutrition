import React, { Component } from 'react'

class FoodBox extends Component {
    constructor(props) {
        super(props)
    }

    state = {

    }

    render() {
        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={this.props.image} alt={this.props.name}/>
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
                                <input onChange={event => this.props.quantityCountFunction(this.props.name, event.target.value)} type="number" className="input" value={this.props.quantity} />
                            </div>
                            <div className="control">
                                <button onClick={event => this.props.addFoodTolist(this.props.name, this.props.calories, this.props.quantity)} className="button is-info">+</button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}

export default FoodBox







