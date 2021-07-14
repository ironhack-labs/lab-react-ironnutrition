import React, { Component } from 'react'

export default class Total extends Component {
    render() {
        const { list } = this.props
        return (
            <div>
                Total
                {
                    list.map((meal, i) => {
                        return (
                            <div className="box" key={i}>
                                <article className="media">
                                    <div className="media-left">
                                        <figure className="image is-64x64">
                                            <img src={meal.image} />
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <div className="content">
                                            <p>
                                                <strong>{meal.name}</strong> <br />
                                                <small>{meal.calories}</small>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="media-right">
                                        <div className="field has-addons">
                                            <div className="control">
                                                <input className="input" type="number" value="1" />
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
                    })
                }
            </div>
        )
    }
}
