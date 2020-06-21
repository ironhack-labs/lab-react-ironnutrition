import React, { Component } from 'react';
import './FoodBox.css';
import 'bulma/css/bulma.css';

class FoodBox extends Component {
  constructor(props) {
    debugger
    super(props);
    this.setQuantity = this.setQuantity.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  state={
      quantity:1,
      name:this.props.name,
      calories:this.props.calories,
      index:this.props.index
  }

  setQuantity(e){
    this.setState({
        quantity:e.target.value
    })
  }

  submitHandler(e){
      debugger
      console.log(this.state);
    //  var foodsCopied = [];
    //   foodsCopied.push({
    //       name:this.state.name,
    //       calories:this.state.calories * this.state.quantity,
    //       quantity:this.state.quantity
    //   })

      let foodsCopied = {
          name:this.state.name,
          calories:this.state.calories * this.state.quantity,
          quantity:this.state.quantity
      }

      this.setState({
          todaysFood:foodsCopied
      })
      this.props.todaysFood(foodsCopied);

  }

  render() {
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
                  <small>{this.props.calories}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input className="input" type="number" value={this.state.quantity} onChange={this.setQuantity}/>
                </div>
                <div className="control">
                  <button type="submit" onClick={this.submitHandler} className="button is-info">+</button>
                </div>
              </div>

            </div>
          </article>
        </div>

    );
  }
}

export default FoodBox;
