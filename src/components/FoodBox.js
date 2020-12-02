import React from 'react'

class FoodBox extends React.Component {

    state = {
        quantity: 1
    }


    handleClick = (event) => {
        const { name } = event.target;
        this.setState({ [name]: this.state.quantity++ });
        this.props.handleTodaysList(this.props.foodItem, this.state.quantity);
    }

    render() {
        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={this.props.foodItem.image} />
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{this.props.foodItem.name}</strong> <br />
                                <small>{this.props.foodItem.calories}</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input className="input" type="number" name="quantity" value={this.state.quantity} />
                            </div>
                            <div className="control">
                                <button onClick={this.handleClick} className="button is-info">
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
export default FoodBox;