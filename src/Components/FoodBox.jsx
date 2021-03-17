import React, { Component } from 'react'

export class FoodBox extends Component {

    state= {
        quantity: 1,
    }
    
    
    handleQuantityChange = (event) => {
       const value = event.target.value;
       this.setState({quantity : value})
    }

    handleAddToTodayFood = () => {
        
        const addTodayFood = {name: this.props.product.name, quantity: this.state.quantity}
        if (this.state.quantity > 0) this.props.add(addTodayFood); 
        this.setState({quantity: 1})
        
    }

    handleRemoveToTodayFood = () => {
        
        const removeTodayFood = {name: this.props.product.name, quantity: this.state.quantity}
        if (this.state.quantity > 0) this.props.remove(removeTodayFood); 
        this.setState({quantity: 1})
        
    }


    render() {

        const food = this.props.product
        

        return (
            
          <div className="box" key={this.props.name}>
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={food.image} alt={food.name} />
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
                    <input onChange={this.handleQuantityChange} className="input" type="number" name="number" value={this.state.quantity}/>
                  </div>
                  <div className="control">
                    <button className="button is-info" onClick={this.handleAddToTodayFood}>+</button>
                  </div>
                  <div className="control">
                    <button className="button is-info" onClick={this.handleRemoveToTodayFood}>-</button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        );
    }
}

export default FoodBox
