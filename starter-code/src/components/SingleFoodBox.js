import React from "react";


export default class FoodBox extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      quantity: 1
    }
  }
  // you cant have a constructor if your component is a function it has to be a class

  handleChangeQuantity = (e) => {
    this.setState({ quantity: e.currentTarget.value });
  }

  clickHandlerAddTodayFood = () => {
    this.props.addTodaysFoodMethod(this.props.theFood, this.state.quantity)
  }

  render(){

  

    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.theFood.image} alt="" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.theFood.name}</strong> <br />
                <small>{this.props.theFood.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number" 
                  defaultValue={this.state.quantity}
                  onChange={this.handleChangeQuantity}
                />
              </div>
              <div className="control">
                <button className="button is-info" onClick={this.clickHandlerAddTodayFood}>
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
