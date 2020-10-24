import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './FoodBox'


class App extends React.Component{
  state = {
    foods: foods,
    foodsArrayCopy:foods,
    visible: false,
    name:'',
    calories:'',
    image:'',
    todayFood:[]
  }

  displayForm = (e) => {
    e.preventDefault()
    this.setState({visible:true}) 
  }


  submitHandler = (e) => {
    e.preventDefault()
    let newFood = {
      name: this.state.name,
      calories:this.state.calories,
      image: this.state.image
    } 
    console.log(newFood)
    
    this.setState({ 
      foods: [newFood, ...foods],
      visible: false
    })
  }

  changeHandler = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }


  searchFood = (e) => {
    let searchFood = e.target.value.toLowerCase()
    console.log(searchFood)
    
    this.setState({
      foods: this.state.foodsArrayCopy.filter((food) => {
        return food.name.toLowerCase().includes(searchFood) 
      })
    })
  }

  addTodayFood = (food) => {
    //console.log(food)
    this.setState({todayFood:[...this.state.todayFood, food]})
  }

  render(){
    console.log(this.state.todayFood)
  return (
    <div className="App">
      <h1 className='title'>IronNutrition</h1>
      <button onClick={this.displayForm}>Add New Food</button>
      {this.state.visible && 
        <div className='newFoodForm'>
          <form onSubmit={this.submitHandler}>
              <input type='text' value={this.state.name} placeholder='Food Name' name='name' onChange={this.changeHandler}/>
              <input type='text' value={this.state.calories} placeholder='Calories' name='calories' onChange={this.changeHandler}/>
              <input type='text' value={this.state.image} placeholder='Image Url' name='image' onChange={this.changeHandler}/>
              <input type="submit" value="Submit"/>
          </form>
        </div>
        }
    
      <div>
        <input onChange={this.searchFood} type="text" className="input search-bar" name="search" placeholder="Search"/>
      </div>     

      <div>
        <h1>Today's Foods</h1>
        {this.state.todayFood.map((food,index) => {
          return <div>
          <p>{food.quantity} * {food.name} = {food.quantity*food.calories} calories</p>
           </div>
        })}
        <p>Total:
          {this.state.todayFood.reduce((accumulator, currentValue) => {
            return accumulator + (currentValue.calories * currentValue.quantity)
          }, 0)}
        </p>
      </div>

      {this.state.foods.map((food, index) => {
        return <FoodBox key={index} food={food} addTodayFood={this.addTodayFood}/>
        })}
      </div>
  )}
}

export default App;
