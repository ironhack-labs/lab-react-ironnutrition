import React, { Component } from 'react'
import 'bulma/css/bulma.css';

class Add extends Component {
    
    state = {
        foodForm : false,
        name : '',
        calories : '',
        image : '',
        quantity : ''
    }
    foodForm = () => {
        this.setState({
            foodForm : true
        })
		}
		hideFoodForm = () =>{
			this.setState({
				foodForm : false
			})
		};
		handleInput = (e) => {
			this.setState({
				[e.target.name]: e.target.value,
			});
		};
		addFoodButton = () => {
			const { name, calories, image, quantity } = this.state;
			const newFood = { name, calories, image, quantity }
			this.props.addFood(newFood);
			this.hideFoodForm;
		}

    render(){
			const { name, calories, image, quantity } = this.state;
			console.log(this.state.foodForm)
        return(
            <div> 
            	<button onClick={this.foodForm}>Add new food</button>
							{this.state.foodForm &&
									<div>
										<div>
											<label htmlFor='name'>Name</label>
											<input type='text' value={name} name='name' onChange={this.handleInput}/>
										</div>
										<div>
											<label htmlFor='Calories'>Calories</label>
											<input type='number' value={calories} name='calories' onChange={this.handleInput}/>
										</div>
										<div>
											<label htmlFor='image'>Image</label>
											<input type='text' value={image} name='image' onChange={this.handleInput}/>
										</div>
										<div>
											<label htmlFor='quantity'>Quantity</label>
											<input type='number' value={quantity} name='quantity' onChange={this.handleInput}/>
										</div>
										<div>
											<button onClick={this.addFoodButton} onClick={this.hideFoodForm}>Add</button>
											</div>
											{/* <div>
											<button onClick={this.hideFoodForm}>Exit</button>
											</div> */}
									</div>
							}
							</div>
          
        )
    }
}

export default Add;