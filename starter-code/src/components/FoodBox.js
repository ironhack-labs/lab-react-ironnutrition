import React, { Component } from 'react';

class FoodBox extends Component {
    state = {
        quantity: this.props.food.quantity
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addFoodToTodayList = () => {
        this.props.addFoodToTodayList(this.props.food.name, this.state.quantity)
    }

    render() {
        const { food } = this.props;
        const { quantity } = this.state;

        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={food.image} alt={food.name}/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{food.name}</strong> <br />
                                <small>{food.calories} cal</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input
                                    className="input"
                                    id='quantity'
                                    type="number"
                                    name='quantity'
                                    value={quantity}
                                    onChange={this.handleInput}
                                />
                            </div>
                            <div className="control">
                                <button className="button is-info" onClick={this.addFoodToTodayList}>
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