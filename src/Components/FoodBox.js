import React, { Component } from 'react'

export default class FoodBox extends Component {

    render() {
        const boxes = this.props.food.map((ele, i) => {
            return (
                <div className="box" key={i} >
                    <article className="media">
                        <div className="media-left">
                            <figure className="image is-64x64">
                                <img src={ele.image} alt={ele.name} />
                            </figure>
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <p>
                                    <strong>{ele.name}</strong> <br />
                                    <small>{ele.calories}</small>
                                </p>
                            </div>
                        </div>
                        <div className="media-right">
                            <div className="field has-addons">
                                <div className="control">
                                    <input className="input" type="number" name="value" value={this.props.data[i]} onChange={this.props.handleValue} />
                                </div>
                                <div className="control">
                                    <button onClick={() => this.props.clickPlus(ele)}  className="button is-info" >
                                        +</button>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            )
        })
        return (
            <div>
                {boxes}
            </div>

        )
    }
}
