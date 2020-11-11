import React, { Component } from 'react'

class FoodBox extends Component {

    addToday = event => {
        this.props.todaysFood(event.target.value);
    }
    render() {
        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={this.props.picture} alt=""/>
                    </figure>
                    </div>
                    <div className="media-content">
                    <div className="content">
                        <p>
                        <strong>{this.props.food}</strong> <br />
                        <small>{this.props.calories}</small>
                        </p>
                    </div>
                    </div>
                    <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                        <input className="input" type="number" value={this.props.quantity} />
                        </div>
                        <div className="control">
                        <button className="button is-info" valeu={this.props.food} onClick={(e) => this.addToday(e)}>
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