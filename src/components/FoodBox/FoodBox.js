import React from 'react';
class FoodBox extends React.Component {
    increaseAmount = (quantity) => {
        const foodListCopy = [...this.props.foodList];
        let addQuantity = this.props.addQuantity;
        foodListCopy.forEach((click) => {
            return addQuantity++;
        }
        )
    }
    render() {
        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={this.props.dish.image} alt="" />
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{this.props.dish.name}</strong> <br />
                                <small>{this.props.dish.calories}</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input className="input" type="number" value={this.props.addQuantity} onClick={this.increaseAmount} />
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
    }
}
export default FoodBox;