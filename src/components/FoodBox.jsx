import React from 'react'

class FoodBox extends React.Component {

    state = {
        quantity: 1
    }

    handleClick = () => {
        this.props.addFoodMenu(this.props.food, this.state.quantity)
    }

    handleChange = (event) => {
        this.setState({ quantity: event.target.value })
    }

    render() {

        return (
            <div>
                <div className="box mb-2">
                    <article className="media">
                        <div className="media-left">
                            <figure className="image is-64x64">
                                <img src={this.props.food.image} alt="Pizza" />
                            </figure>
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <p>
                                    <strong>{this.props.food.name}</strong> <br />
                                    <small>{this.props.food.calories}</small>
                                </p>
                            </div>
                        </div>
                        <div className="media-right">
                            <div className="field has-addons">
                                <div className="control">
                                    <input
                                        className="input"
                                        type="number" min="1"
                                        value={this.state.quantity}
                                        onChange={this.handleChange} />
                                </div>
                                <div className="control">
                                    <button className="button is-info" onClick={this.handleClick}>+</button>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        )
    }

}

export default FoodBox
