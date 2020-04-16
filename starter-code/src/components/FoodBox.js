import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class FoodBox extends Component {

    state = {
        quantity: 0
    }

    updateValue(e) {
        this.setState({
            quantity: e.target.value
        })
    }

    render() {
        const { name, calories, image} = this.props
        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src= {image} alt='food' />
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
                                <input onChange={e => this.updateValue(e)}
                                    className="input"
                                    type="number"
                                    value={this.state.quantity}
                                />
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

export default FoodBox;