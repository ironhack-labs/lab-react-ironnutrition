import React,{Component } from "react";

export default class FoodBox extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const element={
      name:this.props.name,
      quantity:this.props.quantity,
      calories:this.props.calories
    }
    return(
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image}/>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <br />
                <small>{this.props.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number" 
                  value={this.props.quantity}
                />
              </div>
              <div className="control">
                <button onClick={()=>this.props.onAddList(element)} className="button is-info">
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