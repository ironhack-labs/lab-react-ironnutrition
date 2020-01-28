import React, { Component } from 'react'

/* element outof foods:
   ---------------------------------------------------------------
    "name": "Pizza",
    "calories": 400,
    "image": "https://i.imgur.com/eTmWoAN.png",
    "quantity": 0

*/
export default class FoodBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            food: this.props.food
        }
    }    

    handleInputChange = (event) => {
        const target = event.target;
        const type = event.target.type;
        const value = target.value;
        const name = target.name;

        const food = this.state.food;
        food[name] = Math.floor(value);
        this.setState({ food: food });
    }

    handleButtonClick = (event) => {
        if( this.state.quantity > 0){
            let food = Object.assign({}, this.props.food );
            food.quantity = this.state.quantity;
            this.props.addNewFoodTodayToListHandler(food);
        }
    }

    render() {
        this.state.quantity = this.props.food.quantity;
        return (
            <div className="box" key={this.props.Key}>
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={this.state.food.image} alt=""/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                            <strong>{this.state.food.name}</strong> <br />
                            <small>{this.state.food.calories} cal</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input
                                    className="input"
                                    type="number"
                                    name="quantity"
                                    min="1" 
                                    value={this.state.food.quantity}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <div className="control">
                                <button className="button is-info" onClick={()=>{this.handleButtonClick()}}>+</button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}
