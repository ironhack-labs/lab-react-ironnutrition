import React, { Component } from 'react';
import FoodBox from './components/FoodBox';
import './App.css';
import 'bulma/css/bulma.css';
import foodsData from './foods.json';
import Search from './components/Search';

class App extends Component {
	state = {
		foods: foodsData,
		filterFoods: [],
		name: '',
		calories: 0,
		image: '',
		quantity: 0,
		search: '',
		total: 0
	};

	handleInput = ({ target: { name, value } }) => {
		this.setState({
			...this.state,
			[name]: value
		});
	};

	showModal = () => {
		const modal = document.querySelector('.modal');
		modal.classList.add('is-active');
	};

	closeModal = () => {
		document.querySelector('.modal').classList.remove('is-active');
	};

	addFood = () => {
		const { name, calories, image, foods } = this.state;
		this.setState({
			foods: [ ...foods, { name, calories, image, quantity: 0 } ],
			name: '',
			calories: 0,
			image: '',
			quantity: 0
		});
		this.closeModal();
	};

	filterFood = ({ target: { name, value } }) => {
		this.setState({
			...this.state,
			[name]: value,
			filterFoods: this.state.foods.filter((food) => food.name.includes(value))
		});
	};

	addFoodToList = (index) => {
		console.log(this.state.foods[index].calories);
		const li = `
    <li>${document.getElementById(index).value} ${document.getElementById(index).name} = ${this.state.foods[index]
			.calories * document.getElementById(index).value} cal</li>
    `;
		document.querySelector('.list-food').insertAdjacentHTML('beforeend', li);
		this.setState({
			...this.state,
			total: this.state.total + this.state.foods[index].calories * document.getElementById(index).value
		});
	};

	render() {
		console.log(this.state);
		const { foods, filterFoods, total } = this.state;
		return (
			<div className='container'>
				<Search onChange={this.filterFood} name='search' id='search' />
				<div className='columns'>
					<div className='column'>
						{this.state.search.length === 0 ? (
							foods.map((food, index) => (
								<FoodBox
									key={index}
									id={index}
									name={food.name}
									calories={food.calories}
									quantity={food.quantity}
									image={food.image}
									onChange={this.handleInput}
									onClick={this.addFoodToList}
								/>
							))
						) : (
							filterFoods.map((food, index) => (
								<FoodBox
									key={index}
									id={index}
									name={food.name}
									calories={food.calories}
									quantity={food.quantity}
									image={food.image}
									onChange={this.handleInput}
									onClick={this.addFoodToList}
								/>
							))
						)}
						<button className='button' onClick={this.showModal}>
							Add Food
						</button>
						<div className='modal'>
							<div className='modal-background' onClick={this.closeModal} />
							<div className='modal-content'>
								<div className='card'>
									<div className='card-content'>
										<div className='field'>
											<label className='label'>Name</label>
											<div className='control'>
												<input
													className='input'
													name='name'
													type='text'
													placeholder='Text input'
													onChange={this.handleInput}
												/>
											</div>
										</div>
										<div className='field'>
											<label className='label'>Calories</label>
											<div className='control'>
												<input
													className='input'
													name='calories'
													type='number'
													placeholder='Text input'
													onChange={this.handleInput}
												/>
											</div>
										</div>
										<div className='field'>
											<label className='label'>Image</label>
											<div className='control'>
												<input
													className='input'
													name='image'
													type='text'
													placeholder='Text input'
													onChange={this.handleInput}
												/>
											</div>
										</div>
										<button className='button' onClick={this.addFood}>
											Submit
										</button>
									</div>
								</div>
							</div>
							<button className='modal-close is-large' aria-label='close' onClick={this.closeModal} />
						</div>
					</div>
					<div className='column content'>
						<h2 className='subtitle'>Today's foods</h2>
						<ul className='list-food' />
						<strong>Total: {total} cal</strong>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
