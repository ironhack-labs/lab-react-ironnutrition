import React, { Component } from 'react';
import './App.css';
import foods from './foods.json';

class FoodBox extends Component {
    state = {
        theFood: foods,
        // newItems: foods,
        newFoodItem: false,
    }

    toggleFoodForm = () => {
        this.setState({
            newFoodItem: !this.state.newFoodItem
        })
    } 

    addNewFood = () => {
        const newFood = [...this.state.theFood]
        const newItem = [...this.state.newItem]
        console.log(newItem)
        // newItem.push(); // adds the random celeb to the previous array


        // this.setState({ //changes the state to add the new random person
        // newItem: newItem,
        // });
    }

render() {
    const foodList = this.state.theFood.map((foodItem, index) => {
      
        return (                        
        <div className="box">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={foodItem.image} />
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{foodItem.name}</strong> <br />
                            <small>{foodItem.calories}cal</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                    <div className="control">
                        <input
                            className="input"
                            type="number" 
                            value={foodItem.quantity}
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
        )
    })   
    
    return (
        <div>
            <button onClick={()=> this.toggleFoodForm()}>Add a New Food</button>
            { this.state.newFoodItem ?
            <div>
                <h1>Enter the new food item's information below.</h1>
                <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Name" value={this.state.value} onChange={(e) => this.handleChange(e)} />
                <input type="text" placeholder="Picture" value={this.state.value} onChange={(e) => this.handleChange(e)} />
                <input type="number" placeholder="Calories"value={this.state.value} onChange={(e) => this.handleChange(e)} />
                    <input type="submit" />
                </form>
            </div>
            : <div></div>
            }
            {foodList}
        </div>
    );
  }
}

export default FoodBox;





















