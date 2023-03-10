import React, { Component } from 'react';
import FoodList from '../../components/FoodList/FoodList';
import FoodsJSON from './../../foods.json';
import "./Home.css"

class Home extends Component {
  state = {
    food: FoodsJSON,
    name: '',
    image: '',
    calories: '',
    servings: '',
    searh: "",
    showform: true,
  };

  onSubmitFood = (event) => {
    event.preventDefault();

    const { food, name, image, calories, servings } = this.state;

    const newFood = { name, image, calories, servings };

    this.setState({ food: [newFood, ...food] });
  };


  onChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value })
  }

  getFilterFood =() => {
    const {food, search} = this.state

    if (search) {
        return food.filter(food => food.name.toLowerCase().includes(search.toLowerCase()))
    } else {
        return food 
    }
  }

  onDeleteFood = (FoodIdToDelete) => {
    const {food} = this.state
    this.setState({ food: food.filter(food => food.name !== FoodIdToDelete) })
  }
  //food.name sería el food.id si tuviese id.

  toggleForm = () => {
    this.setState(prevState =>{
      return {
        showform: !prevState.showform
      }
    })
  }




  render() {
    const { name, image, calories, servings, search, showform } = this.state;
    return (
      <div className="Home">
        <h3>Add Food Entry</h3>

      <button onClick={this.toggleForm} className="btn btn-primary mt-5">{showform ? 'Hide' : 'Add New Food'}</button>
       {showform ?
       <div className='formcontainer'>
        <form className="m-4 form"onSubmit={this.onSubmitFood}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              value={name}
              onChange={this.onChange}
              name="name"
              required
              className="form-control"
              id="name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Image
            </label>
            <input
              required
              value={image}
              onChange={this.onChange}
              name="image"
              className="form-control"
              id="image"
              placeholder="Insert your image here"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="calories" className="form-label">
              Calories
            </label>
            <input
              required
              type="number"
              value={calories}
              onChange={this.onChange}
              name="calories"
              className="form-control"
              id="calories"
              placeholder="1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="servings" className="form-label">
              Servings
            </label>
            <input
              type="number"
              required
              value={servings}
              onChange={this.onChange}
              name="servings"
              className="form-control"
              id="servings"
              placeholder="1"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
       
        </div>
       : null

       
       }

        <hr></hr>
        <div className='d-flex justify-content-center'>
        <input 
          name="search"
          onChange={this.onChange}
          value={search}
          className="searchbar form-control mb-4 text-center" type="search"
          placeholder="Search" aria-label="Search"
        />
        </div>
        <hr></hr>


        <FoodList food={this.getFilterFood()}  onDeleteFood={this.onDeleteFood}/>
      </div>
    );
  }
}

export default Home;
