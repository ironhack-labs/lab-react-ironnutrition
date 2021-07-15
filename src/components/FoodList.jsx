import React, { Component } from 'react'

 class FoodList extends Component {
    render() {
        return (
            <div>
                <form onSubmit={(event) => {this.props.onAddTotal(event, this.props.food)}}>
                 <article  className="media">
                    <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={this.props.food.image} alt=""/>
                    </figure>
                    </div>
                    <div className="media-content">
                    <div className="content">
                        <p>
                        <strong>{this.props.food.name}</strong> <br />
                        <small>{this.props.food.calories} cal</small>
                        </p>
                    </div>
                    </div>
                    <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                        <input className="input" type="number" placeholder="1" name='quantity' />
                        </div>
                        <div className="control">
                        <button type="submit" className="button is-info">
                            +
                        </button>
                        </div>
                    </div>
                    </div>
                </article>
                </form>
            </div>
        )
    }
}
export default FoodList