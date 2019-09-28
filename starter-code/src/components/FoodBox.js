import React, { Component } from 'react'


export default class FoodBox extends Component {1

  constructor(props){
    super(props)
    this.state={
      qty:1,
    }
  }

  addQty =(e)=>{
    this.setState(
      {qty: e.target.value}
    )
  }

  render() {
    return (
      <div>
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.food.image} />
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
                <input onChange={this.addQty}
                  className="input"
                  type="number" 
                  value={this.state.qty}
                  name="qty"
                />
              </div>
              <div className="control">
                <button onClick={()=>this.props.addToList(this.props.id,this.state.qty)} className="button is-info">
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
