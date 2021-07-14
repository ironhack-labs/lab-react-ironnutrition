import React, { Component } from 'react'

class TodaysFood extends Component {
    render() {
        const { foods, onDelete } = this.props;
        
        let totalCal = foods.reduce((acc, food) => {
            return acc + food.quantity * food.calories;
        }, 0);

        return (
            <div>
                {
                    foods.map((food, index) => {
                        return (
                            <div key={index} className="box">
                                <article className="media">
                                    <div className="media-left">
                                        <figure className="image is-64x64">
                                            <img src={food.image} />
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
                                            <div className="is-flex is-align-items-center ml-0 mr-4">
                                                <p>
                                                    X{food.quantity}
                                                </p>
                                            </div>
                                            <div className="control">
                                                <button
                                                    onClick={() => { onDelete(index) }} className="button is-danger">
                                                    x
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        );
                    })
                }
                <h3 className="is-size-4">
                    Total calories: {totalCal}
                </h3>
            </div>
        );
    }
}

export default TodaysFood
