import React, { Component } from "react";

class FoodCard extends Component{
  constructor(props){
    super(props)
    this.state = {
      clickCount : 0,
    }
  }

  clickHandlerAdd = () => {
    this.setState({
      clickCount: this.state.clickCount + 1,
    })
  }

  clickHandlerSubstract = () => {
    this.setState({
      clickCount: this.state.clickCount - 1
    })
    if(this.state.clickCount <= 0){
      alert("Wanna eat less than zero? Stop fucking playing with me homie")
      this.setState({
        clickCount: 0
      })
    }

  }

  changeHandler = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name] : value
    })
  }

  render(){
    return(
        <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} alt={this.props.image}/>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <br />
                <small>{this.props.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number" 
                  value={this.state.clickCount}
                  onChange={e  => this.changeHandler(e)}
                />
              </div>
              <div className="control">
                <button className="button is-info" onClick={this.clickHandlerAdd}>
                  +
                </button> 
                <button className="button is-info" onClick={this.clickHandlerSubstract}>
                  -
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>  
    )
  }
}



export default FoodCard;