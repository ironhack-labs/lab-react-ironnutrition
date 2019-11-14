import "./food-box.css"
import React from "react";
// ^ this is always needed for any react components

class FoodBox extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      foodQuantity: 0,
    }
  }

  updateInput = (e) => {
    // console.log(e.target.value) // this works

    this.setState({
      foodQuantity: e.target.value
    })

    this.props.updateQuantity(e, this.props.foodName, e.target.value)
  }

  render() {
    return(
      <div className="box">
        <article className="media">

          {/* pizza image */}
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.foodImg} alt={this.props.foodName}/>
            </figure>
          </div>

          {/* food type and calories */}
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.foodName}</strong> <br />
                <small>{this.props.foodCalories} cal</small>
              </p>
            </div>
          </div>

          {/* quantity amount */}
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                {/* fix onChange error later */}
                <input
                  className="input"
                  type="number" 
                  // value={this.props.foodQuantity}
                  onChange={this.updateInput}
                  placeholder="0"
                />
              </div>
              <div className="control">
                {/* <button className="button is-info" onClick={(e) => {this.props.testProp()}}> */}
                <button className="button is-info" onClick={(e) => {this.props.addToTodaysList(e, this.props.foodName, this.props.foodCalories, this.props.foodImg, this.state.foodQuantity)}}>
                  +
                </button>
              </div>
            </div>
          </div>

        </article>
      </div>
    );
  }
}

export default FoodBox;