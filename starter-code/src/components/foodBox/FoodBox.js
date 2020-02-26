import React, {Component} from 'react'
import './FoodBox.css'

class FoodBox extends Component {
    constructor (props) {
        super(props)  
        
        this.state = {
            food: props
        }
    }

    buttonHandler = e => {
        e.preventDefault()

        this.props.addNewList(this.state.food)
    }
    
    formHandler = e => { 
        this.setState({
            food:{
            ...this.state.food,
            quantity: e.target.value}
        })
    }

    render() {

       return (<div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={this.state.food.image} alt={this.state.food.name}/>
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{this.state.food.name}</strong> <br />
          <small>{this.state.food.calories}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <form onSubmit={this.buttonHandler}>
        <div className="control">
          <input
            className="input"
            type="number" 
            value={this.state.food.quantity}
            onChange={this.formHandler}
          />
        </div>
        <div className="control">
          <button className="button is-info">
            +
          </button>
        </div>

        </form>
      </div>
    </div>
  </article>
</div>)
    }
}

export default FoodBox