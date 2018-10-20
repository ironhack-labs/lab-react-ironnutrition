import React, { Component } from "react";
import './App.css';
import food from './foods.json'


class FoodBox extends Component {
    constructor(props){
        super(props)

        this.state = {
          countItems : 1
        }
    }

    AddCountItems = () => {
      this.setState({
        countItems : this.state.countItems + 1
      })
    }

    AddFoodToCard = (number, name, calories) => {
      var numberCalories = parseInt(calories) * parseInt(number)
      this.props.AddFood(number,name, numberCalories)
    }

    render() {

        const myfood = this.props.OneFood;
        const myimage = this.props.OneImage;
        const mycalories = this.props.OneCalorie;

        return(
            <div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={myimage} class="images" />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{myfood}</strong> <br />
          <small>{mycalories}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            type="number" 
            value={this.state.countItems}
            onClick={this.AddCountItems}
          />
        </div>
        <div className="control">
          <button className="button is-info" onClick={() => this.AddFoodToCard(this.state.countItems, myfood, mycalories) }>
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