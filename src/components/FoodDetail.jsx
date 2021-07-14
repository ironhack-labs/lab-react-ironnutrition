import React, { Component } from 'react'

class FoodDetail extends Component {
    render() {
        const { food, onTodaysFood } = this.props;

        return (
            <div className="box">
                <form onSubmit={(event) => { onTodaysFood(event, food) }} className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={food.image}/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{food.name}</strong> <br />
                                Calories: <small>{food.calories}</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input className="input is-link" type="number" name="quantity" placeholder="Pick the amount"/>
                            </div>
                            <div className="control">
                                <button type="submit" className="button is-info">+</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default FoodDetail
