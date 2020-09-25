import React, { Component } from 'react';
 import './FoodBox.css';
 class FoodBox extends Component {
 	constructor(props) {
         super(props);
         let { name, calories, image } = this.props.food
         this.state = {
             name,
             calories,
             image,
             quantity: 0
         };
 	}
     countQuantity(){
         this.setState({
             quantity: this.state.quantity + 1
         })
     }
 	render() {
 		return (
 			<div class="column">
 				<div className="box">
 					<article className="media">
 						<div className="media-left">
 							<figure className="image is-64x64">
 								<img src={this.props.food.image} alt="food-pic" />
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
 									<input onClick={() => this.countQuantity()}  className="input" type="number" value={this.state.quantity} />
 								</div>
 								<div className="control">
 									<button  onClick={() => this.props.handleAddQuantity(this.state)} className="button is-info">+</button>
 								</div>
 							</div>
 						</div>
 					</article>
 				</div>
 			</div>
 		);
 	}
 }

  export default FoodBox;