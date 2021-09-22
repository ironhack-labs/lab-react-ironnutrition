import React, { Component } from 'react'
import AddFood from '../AddFood/AddFood';
import foods from '../foods.json'

export default class FoodBox extends Component {
    state = {
        stateFood: foods
    }

    addFood = (food) => {
        const foodCopy = [...this.state.stateFood];
        foodCopy.unshift(food);

        this.setState({
            ...this.state,
            stateFood: foodCopy
        }, () => console.log('Estado modificado'))
    }


    render() {
        return (
            <div className="">
                <AddFood addFood={this.addFood} />


                {
                    this.state.stateFood.map(({ name, calories, image, quantity }, idx) => {
                        return (
                            <div className="columns" key={idx}>

                                <div className="box column is-two-fifths" >
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
                                                    <input className="input" type="number" onChange={e => quantity} />
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
                            </div>
                        )
                    })

                }



            </div>
        )
    }
}
