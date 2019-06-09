import React, { Component } from 'react';
import AddButton from './AddButton';

class FoodBox extends Component {

    render() {
        console.log()
        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={this.props.item.image} />
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{this.props.item.name}</strong> <br />
                                <small>{this.props.item.calories}</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input
                                    className="input"
                                    type="number"
                                    value={this.props.item.quantity}
                                />
                            </div>
                            <div className="control">
                                <AddButton onClick={this.props.addItem} idx={this.props.idx} />
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}

export default FoodBox;