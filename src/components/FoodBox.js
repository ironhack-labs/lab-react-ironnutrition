import React, { Component } from 'react'

class FoodBox extends Component {
    constructor() {
        super();
        this.state = {
            quantity: 1
        }
    }

    handleQuantityInput = (e) => {
      const newQuantity = e.target.value;
  
      this.setState({ quantity:newQuantity })
    }
  
    handleAddFood = () => {
      const foodToAdd = {
        quantity: this.state.quantity,
        name: this.props.food.name,
        calories: this.props.food.calories
        }

        this.props.addNewFood(foodToAdd);
    }
  

    render() {
        const { food } = this.props;
        return (
        <div>
          <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={food.image} alt="meal" />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{food.name}</strong> <br />
                    <small>{food.calories} cal</small>
                  </p>
                </div>
                
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input className="input" type="number" name="quantity" value={this.state.quantity} onChange={this.handleQuantityInput} />
                  </div>
                  <div className="control">
                    <button onClick={this.handleAddFood} className="button is-info">
                      +
                    </button>
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
