import React, { Component }from 'react'


class FoodBox extends Component{
    constructor({food}){
        super()
        this.food = food;
    }

    render(){
            return (
            <div className="box">
                <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                    <img src={this.food.image} />
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                    <p>
                        <strong>{this.food.name}</strong> <br />
                        <small>{this.food.calories}</small>
                    </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                    <div className="control">
                        <input className="input" type="number" value={this.food.quantity} />
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
        )}
}

export default FoodBox