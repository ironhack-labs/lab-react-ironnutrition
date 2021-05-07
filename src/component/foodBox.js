import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class FoodBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: this.props.quantity || 0,
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addFood(this.state.quantity);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        })
    }

    render() {
        const { name, image, calories } = this.props.food;
        const quantity = this.state.quantity;
        return (
            <form
                className="newFoodForm"
                onSubmit={(e) => this.handleSubmit(e)}
            >
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
                                    <input className="input" type="number" name="quantity" value={quantity} onChange={(e) => this.handleChange(e)} />
                                </div>
                                <div className="control">
                                    <button type="submit" className="button is-info">
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </form>
        )
    }
}

export default FoodBox;