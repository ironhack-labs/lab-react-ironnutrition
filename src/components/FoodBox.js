import React, { Component } from 'react';

class FoodBox extends Component {
    state = {
        quantity: 0,
        todaysFood: this.props.todaysFood
    }

    quantityChangeHandler = (event) => {
        let inputValue = event.target.value;
        const stateCopy = {quantity: inputValue};

        this.setState(stateCopy)
    }

    addTodayFoodHandler = (event) => {
        //add food and quantity to list rendered on right side

        //crazy attempt that is very wrong
        // let foodIndex = todaysFood.map(foodItem => foodItem.this.name).indexOf(this.name)
        // if(foodIndex >= 0){
        //     let food = {
        //         name: this.name,
        //         calories: this.calories
        //     }
        //     let newArray = [...todaysFood];
        //     newArray.splice(index,1,food);
        //     setTodaysFood([...newArray])
        // } else {
        //     setTodaysFood([...todaysFood,{
        //         name: this.name,
        //         calories: this.calories
        //     }])
        // }
    }

    render(){
        return (
        <div className="box">
            <article className="media">
                <div className="media-left">
                <figure className="image is-64x64">
                    <img src={this.props.image} alt="food" />
                </figure>
                </div>
                <div className="media-content">
                <div className="content">
                    <p>
                    <strong>{this.props.name}</strong> <br />
                    <small>{this.props.calories} cal</small>
                    </p>
                </div>
                </div>
                <div className="media-right">
                <div className="field has-addons">
                    <div className="control">
                    <input className="input" type="number" value={this.state.quantity} onChange={this.quantityChangeHandler} />
                    </div>
                    <div className="control">
                    <button className="button is-info" onClick={this.addTodayFoodHandler}>
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