import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			foods: foods.map(v => (
				<FoodBox
					foodName={v.name}
					foodCalories={v.calories}
					foodImage={v.image}
					foodQuantity={v.quantity}
				/>
			)),
      addFoodCLick: false,
      displayFoods: "",
		};
    this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
    this.setState(prevState => ({
			addFoodClick: !prevState.addFoodCLick,
		}));
	}
  
  handleFoodAddition(newFood) {
    this.setState(prevState => ({
      foods: [...prevState.foods, newFood]
    }));
  }

  handleSearch(query) {
    let displayFoods = foods.filter(v => v.name.includes(query)).map(v => (
      <FoodBox
        foodName={v.name}
        foodCalories={v.calories}
        foodImage={v.image}
        foodQuantity={v.quantity}
      />
    ));
    this.setState({
      displayFoods: [...displayFoods]
    });
  }
	render() {
		let footer;
		if (this.state.addFoodCLick) {
			footer = (
        <AddFoodForm submitHandler={(newFood) => this.handleFoodAddition(newFood)}/>
      )
		} else {
			footer = (
				<button className="button is-info" onClick={this.handleClick}>
					Add Food
				</button>
			);
		}
		return (
      <div className="App">
				<SearchForm submitHandler={(query) => this.handleSearch(query)}/>
        {this.state.displayFoods !== "" ? this.state.displayFoods : this.state.foods}
				{footer}
			</div>
		);
	}
}

class SearchForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
      search: "",
		};
  }
  handleSubmit(e) {
    e.preventDefault()

    if (this.state.search.length > 0) {
      let query = this.state.search
      this.props.submitHandler(query)
    }
     
		this.setState({
			search: ""
		});	
  }
  handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value, // refers to the name property. notice the square brackets.
		});
	}
  
  render() {
    return(
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input
          name="search"
          className="input is-info"
          type="text"
          value={this.state.search}
          placeholder="Search for food by name"
          onChange={e => this.handleChange(e)}
        />
      </form>
    )
  }
}

class AddFoodForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
      name: "",
      calories: "",
      image: "",
		};
  }
  handleSubmit(e) {
    e.preventDefault()

    let newFood = (
			<FoodBox
				foodName={this.state.name}
				foodCalories={this.state.calories}
				foodImage={this.state.image}
				foodQuantity="0"
			/>
		);
		this.props.submitHandler(newFood)
  }
  handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value, // refers to the name property. notice the square brackets.
		});
	}

  render () {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input
          name="name"
          className="input is-info"
          type="text"
          value={this.state.name}
          placeholder="Food Name"
          onChange={e => this.handleChange(e)}
        />
        <input
          name="calories"
          className="input is-info"
          type="text"
          placeholder="Calories"
          value={this.state.calories}
          onChange={e => this.handleChange(e)}
        />
        <label for="foodimage">Upload Image</label>
        <input
          name="image"
          className="input is-info"
          type="file"
          value={this.state.image}
          onChange={e => this.handleChange(e)}
        />
        <button
          className="button is-info"
          type="submit"
        >
          Submit
        </button>
      </form>
    );
  }
}

class FoodBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quantity: this.props.quantity,
		};
	}
	handleClick() {
		this.setState(prevState => ({
			quantity: prevState.quantity + 1,
		}));
	}
	render() {
		return (
			<div className="box">
				<article className="media">
					<div className="media-left">
						<figure className="image is-64x64">
							<img src={this.props.foodImage} />
						</figure>
					</div>
					<div className="media-content">
						<div className="content">
							<p>
								<strong>{this.props.foodName}</strong> <br />
								<small>{this.props.foodCalories} cal</small>
							</p>
						</div>
					</div>
					<div className="media-right">
						<div className="field has-addons">
							<div className="control">
								<input
									className="input"
									type="number"
									value="1"
								/>
							</div>
							<div className="control">
								<button
									className="button is-info"
									onClick={(e) => this.handleClick(e)}
								>
									+
								</button>
							</div>
						</div>
					</div>
				</article>
			</div>
		);
	}
}

export default App;
