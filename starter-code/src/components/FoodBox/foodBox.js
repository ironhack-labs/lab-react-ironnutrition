import React, { Component } from "react";
import "./foodBox.css";

export default class FoodBox extends Component {
  constructor() {
    super();
   this.state = {
    quantity:''
   };
  }
  
  changeInputValue = (e)=>{ 
    let inputValue = e.target.value
    this.setState({ ...this.state, quantity:inputValue});
  }

  render() {
    return (
     <div className="box">
     <article className="media">
        <div className="media-left">
          <figure className="image is-64x64"> <img src={this.props.image} /></figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p><strong>{this.props.name}</strong> 
            <small>{this.props.calories}</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" name="quantity" onChange={e=>this.changeInputValue(e)}/>
            </div>
            <div className="control">
              <button   className="button is-info"  onClick={e=>this.props.addMenu(e,this.state,this.props)} >+</button>
            </div>
          </div>
        </div>
      </article>
      <div className="column">
       <h2>Tos</h2>
      </div>
     </div>
    );
  }
}

