import React from 'react'
import 'bulma/css/bulma.css';


class FoodBox extends React.Component {
    constructor(props) {
        super(props);
        const { food, id } = props
        this.state = {
            id: id,
            name: food.name,
            calories: food.calories,
            image: food.image,
            quantity: ''

        }

    }


    handleInputChange = event => {
        const quantity = event.target.value;

        this.setState({
            quantity: parseInt(quantity)
        });
    };


    render() {


        return (

            <div className="box">
                <article className="media">
                    <div className="media-left" key={this.props.id}
                    >
                        <figure className="image is-64x64">
                            <img src={this.props.food.image} alt="" />
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
                                    onChange={this.handleInputChange}
                                    className="input"
                                    type="number"
                                    value={this.state.quantity}
                                    placeholder="0" />
                            </div>
                            <div className="control">
                                <button
                                    className="button is-info"
                                    onClick={() => this.props.foodToBuy(this.state)}>
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