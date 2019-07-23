import React, {Component} from "react";

class FoodBox extends Component {
state = {
  input: ''
}
sendQuantity = ()=>{
  this.props.add(this.props.name,this.state.input)
}
changeInput = (e)=>{
  this.setState({
    input: e.target.value
  })
  
}
sendDelete = () =>{
  this.props.delete(this.props.name,this.props.calories)
}
  render(){
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={this.props.image} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{this.props.name}</strong> <br />
              <small>{this.props.calories} cal</small>
              <button onClick={this.sendDelete}>delete</button>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input className="input" onChange={this.changeInput} type="number" placeholder={this.props.quantity} />
            </div>
            <div className="control">
              <button onClick={this.sendQuantity} className="button is-info">+</button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
  }
}

export default FoodBox;
