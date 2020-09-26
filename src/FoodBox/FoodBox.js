import React from 'react';

class FoodBox extends React.Component {
    state = {
        quantity: 1
    }
    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={`${this.props.food.image}`} />
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{this.props.food.name}</strong> <br />
                                <small>{this.props.food.calories} Cal</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input className="input" type="number" value={this.state.quantity} name="quantity" onChange={this.handleOnChange} />
                            </div>
                            <div className="control">
                                <button className="button is-info" onClick={() => this.props.addQuantity({ ...this.props.food, quantity: Number(this.state.quantity) })}>
                                    +
                                </button>
                            </div>
                            <div className="control">
                                <button className="button is-danger" onClick={() => this.props.deleteFood(this.props.food.name)}>
                                    -
                                </button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        );
    }
}
export default FoodBox;