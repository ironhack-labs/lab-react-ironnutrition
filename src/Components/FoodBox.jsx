import React, { Component } from 'react'

export class FoodBox extends Component {
    state ={
        quantity: 1
    }
    setQuantity = (evt) => {
        this.setState({quantity : evt.target.value})
    }
    handleAddButton = () => {
        this.props.getFood({
            name: this.props.food.name,
            calories: this.props.food.calories,
            quantity: Number(this.state.quantity)
        })
    }
    render() {

        return (    
        <div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={this.props.food.image} alt={this.props.food.name}/>
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
          <input onChange={this.setQuantity} className="input" type="number" value={this.state.quantity} />
        </div>
        <div className="control">
          <button onClick={this.handleAddButton} className="button is-info">
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
