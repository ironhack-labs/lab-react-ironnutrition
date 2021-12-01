import React, { Component } from 'react'
import './FoodBox.css'

export default class FoodBox extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 1,
        }
    }

    handleChange = (e) => {
        let { name, value } = e.currentTarget
    
        this.setState({
            [name]: value,
        })
      }

      handleClick = () => {
          this.props.addingFood({
              quantity: this.state.counter,
              name: this.props.food.name,
              calories: this.props.food.calories
          })
      }


    render() {
        return (
            
         <div className="box">
            <article className="media">
                <div className="media-left">
                    <figure className="">
                        <img src={this.props.food.image} />
                    </figure>
                </div>
            <div className="media-content">
                <div className="content">
                    <p>
                    <strong>{this.props.food.name}</strong> <br />
                    <small>{this.props.food.calories} calories</small>
                    </p>
                </div>
            </div>
            <div className="media-right">
                <div className="field-has-addons">
                    <div className="control">
                        <input onChange={this.handleChange} className="input" type="number" value={this.state.counter} name="counter" />
                    </div>
                <div className="control">
                    <button onClick={this.handleClick} className="button-is-info">
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
