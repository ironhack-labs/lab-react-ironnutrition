import React, { Component } from 'react';

class FoodBox extends Component {
    state = {
        // food: this.props.food,
        quantity: this.props.food.quantity
        // quantity: 34
        // image: this.props.image,
        // name: this.props.name,
        // calories: this.props.calories,
        // quantity: this.props.quantity
    }

    handleInput = (e) => {
        // console.log('this.props.food.quantity', this.props.food.quantity);
        // console.log('this.state.food.quantity', this.state.food.quantity);
        console.log('e.target.value', e.target.value);
        console.log('e.target.name', e.target.name);
        this.setState({
            // [e.target.name]: e.target.value,
            quantity: e.target.value
            // 'this.state.food.quantity': 45
        });
    }

    render() {
        const { food } = this.props;
        const { quantity } = this.state;
        // const { food } = this.state;
        // const { image, name, calories, quantity } = this.state;

        // console.log(this.props.name);
        // console.log(this.state.name);
        // console.log(this.props.food);
        console.log('ENTRO!!!')

        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={food.image} alt={food.name}/>
                            {/* <img src={image} alt={name}/> */}
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                {/* <strong>{food.name}</strong> <br /> */}
                                <strong>{food.name}</strong> <br />
                                <small>{food.calories} cal</small>
                                {/* <strong>{name}</strong> <br />
                                <small>{calories} cal</small> */}
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input
                                    className="input"
                                    id='quantity'
                                    type="number"
                                    name='quantity'
                                    // value={food.quantity}
                                    value={quantity}
                                    onChange={this.handleInput}
                                />
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
        );
    }
}

export default FoodBox;