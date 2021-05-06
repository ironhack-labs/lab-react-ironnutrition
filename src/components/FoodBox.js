import React from 'react';
import TodayFood from './TodayFood'

class FoodBox extends React.Component {

    render() {
        const allFood = this.props.foods.map((food, index) => {
            const {image, name, calories, quantity} = food
        return (
            <div className="box" key={index}>
            <article className="media">
                <div className="media-left">
                <figure className="image is-64x64">
                    <img src={image} alt={name}/>
                </figure>
                </div>
                <div className="media-content">
                <div className="content">
                    <p>
                    <strong>{name}</strong> <br />
                    <small>{calories} cal</small>
                    </p>
                </div>
                </div>
                <div className="media-right">
                <div className="field has-addons">
                    <div className="control">
                    <input className="input" type="number" placeholder='0' onChange={(e)=>this.props.updateQuantity(index, e)}/>
                    </div>
                    <div className="control">
                    <button className="button is-info" onClick={()=>this.props.addFood(name, calories, quantity)}>+</button>
                    </div>
                </div>
                </div>
            </article>
            </div>
        )
        })

        return (
            <div className="columns">
                <div className="column">
                    <div className="FoodBox">
                        {allFood}
                    </div>
                </div>
                <div className="column">
                    <TodayFood todayFoods={this.props.todayFoods}/>
                </div>
            </div>
        )
    }
}

export default FoodBox
