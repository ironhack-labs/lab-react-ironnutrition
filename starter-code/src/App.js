import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
      food: foods,
      allfoods: foods.map(v => (
				<FoodBox
					foodName={v.name}
					foodCalories={v.calories}
					foodImage={v.image}
					foodQuantity={v.quantity}
          increaseQuantity={(name, quantity) => this.updateQuantity(name, quantity)}
          addToMenu={(name) => this.addToMenu(name)}
				/>
			)),
      addFoodCLick: false,
      displayFoods: "",
      menu: [],
      menuDisplay: "",
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
    this.setState(prevState => ({
      allfoods: [...prevState.foods].map(v => (
				<FoodBox
					foodName={v.name}
					foodCalories={v.calories}
					foodImage={v.image}
					foodQuantity={v.quantity}
          increaseQuantity={(name, quantity) => this.updateQuantity(name, quantity)}
          addToMenu={(name) => this.addToMenu(name)}
				/>
			)),
    }))
  }

  clearSearch() {
    this.setState({
      displayFoods: ""
    });
  }

  handleSearch(query) {
    let displayFoods = foods.filter(v => v.name.includes(query)).map(v => (
      <FoodBox
        foodName={v.name}
        foodCalories={v.calories}
        foodImage={v.image}
        foodQuantity={v.quantity}
        increaseQuantity={(name, quantity) => this.updateQuantity(name, quantity)}
        addToMenu={(name) => this.addToMenu(name)}
      />
    ));
    this.setState({
      displayFoods: [...displayFoods]
    });
    this.setState(prevState => ({
      allfoods: [...prevState.foods].map(v => (
				<FoodBox
					foodName={v.name}
					foodCalories={v.calories}
					foodImage={v.image}
					foodQuantity={v.quantity}
          increaseQuantity={(name, quantity) => this.updateQuantity(name, quantity)}
          addToMenu={(name) => this.addToMenu(name)}
				/>
      )),
  }))};

  updateQuantity(name,quantity) {
    let item = this.state.foods.filter(v => v.name === name)
    item.quantity = quantity
    this.setState(prevState => ({
      foods: prevState.foods.map(v => (v.name === item.name) ? v = item : v )
    }))
  };

  addToMenu(name) {
    if (!this.state.menu.includes(name)) {
      this.setState(prevState => ({
        menu: [...prevState.menu, name]
      }))
      let foods = this.state.food.filter(v => this.state.menu.includes(v.name))
      this.setState({
        displayMenu: [...foods].map(v => (
          <div>
            <img src={v.image} alt="a food pic"/>
            <span>{v.name}</span>
            <span>{v.calories}</span>
          </div>
        )),
      })
    }
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
				<SearchForm submitHandler={(query) => this.handleSearch(query)} clearQuery={() => this.clearSearch}/>
        {this.state.displayFoods !== "" ? this.state.displayFoods : this.state.allfoods}
        {this.state.displayMenu}
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
  
  handleClick() {
    this.props.clearQuery()
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
        <button className="button is-warning" onClick={() => this.handleClick}>
					Clear Search
				</button>
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

    let newFood = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.images
    }
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
    this.addToMenu = this.addToMenu.bind(this)
  }
  addToMenu() {
    this.props.addToMenu(this.props.name)
  }
	increaseQuantity() {
		this.setState(prevState => ({
			quantity: prevState.quantity + 1,
    }));
    this.props.increaseQuantity(this.props.name, this.state.quantity)
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
									value={this.state.quantity}
                  onClick={() => this.increaseQuantity}
								/>
							</div>
							<div className="control">
								<button
									className="button is-info"
									onClick={this.addToMenu}
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
