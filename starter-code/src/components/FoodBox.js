import React, { Component } from "react";


export default class FoodBox extends Component {
  constructor() {
    super();
   this.state = {
    quantity:''
   };
  }

  qtValue = (e)=>{ 
    this.setState({quantity:e.target.value});
    console.log(e.target.value)
  }

  render() {
    return (
      <div className="box">
      <article className="media">
         <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image}/>
            </figure>
         </div>
         <div className="media-content">
           <div className="content">
             <p><strong>{this.props.name}</strong></p>
             <p>{this.props.calories} cal</p>
           </div>
         </div>
         <div className="media-right">
           <div className="field has-addons">
             <div className="control">
               <input className="input" min="0" type="number" value={this.state.quantity} onChange={this.qtValue.bind(this)}/>
             </div>
             <div className="control">
               <button   className="button is-info"  onClick={e=>this.props.addFood(e,this.state,this.props)} >+</button>
             </div>
           </div>
         </div>
       </article>
      </div>
     );
  }
}