import React, { Component } from "react";
import foods from '../foods.json'


class NewFood extends Component {
    state={
        food:{},
        foods:[],
    }

    onChange = (e) =>{
      event.preventDefault();
      this.props.addTheMovie(this.state);   
      this.setState({
        title: '',
        director: '',
        hasOscars: false,
        IMDbRating: '' 
      })  
    }
  
      
        let  food = {
          name: e.target.name.value,
          calories: e.target.name.calories,
          image: e.target.name.image,
          quantity: e.target.name.quantity,
        }
      //   let { food } = this.state
      //   food[e.target.name] = e.target.value
      //   this.setState({ food })
      // }

    addFood = e =>{
        let { food, foods } = this.state
        // let newObject = {...food}
        let newFoods = [ ...foods,{...food} ]
        this.props.addFood(this.state)
        this.setState({ foods:newFoods })
    }

  render() { 
    let {food,foods} = this.state
    console.log(food)


    return (
      <div>
        <h2>{food.name}</h2>
        <form onSubmit={this.handleFormSubmit}>
        <input onChange={this.onChange} placeholder="food name" name="name" type="text" />
        <input onChange={this.onChange} placeholder="Amount of Calories" name="calories" type="text"/>
        <input onChange={this.onChange} placeholder="image" name="image" type="text" />
        <input className="input" type="number" name="quantity" />

        <button onClick={this.addFood}> Add food</button>
        </form>
      </div>
    );
  }
}

export default NewFood
