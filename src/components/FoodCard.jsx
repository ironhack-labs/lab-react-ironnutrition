import React from 'react'


export default class FoodCard extends React.Component {
    state = {
        quantity: 1
    }

    handleChange = (event) => {
        this.setState({
            quantity: event.target.value
        })
    }

    render() {
        return (
            <div className="box" id={this.props.index}>
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={this.props.foodElem.image} alt={this.props.foodElem.name} />
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{this.props.foodElem.name}</strong> <br />
                                <small>{this.props.foodElem.calories}</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input className="input" type="number" value={this.state.quantity} onChange={this.handleChange} />
                            </div>
                            <div className="control">
                                <button id={this.props.index} onClick={this.props.addFoodList} className="button is-info">
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