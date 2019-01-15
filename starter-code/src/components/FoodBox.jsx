import React, { Component } from 'react';
import BulmaButton from "./BulmaButton";

export default class FoodBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      quantity: this.props.quantity
    }
  }
  handleChange(e){
    this.setState({quantity: Number(e.target.value)});
  }
  handleAdd(){
    if(this.state.quantity === 0){
      console.warn('Cannot add 0 items');
      return;
    }
    this.setState({quantity: 0});
    this.props.addItem({
      "_id": this.props.id,
      "name": this.props.name,
      "calories": this.props.calories,
      "quantity": this.state.quantity
    });
  }
  render() {
    const {image, name, calories} = this.props;
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={image} alt={name}/>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{name}</strong> <br />
                <small>{calories} cals</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  min="0"
                  value={this.state.quantity}
                  onChange={(e)=>this.handleChange(e)}
                />
              </div>
              <div className="control">
                <BulmaButton isInfo onClick={()=>{this.handleAdd()}}>+</BulmaButton>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}
